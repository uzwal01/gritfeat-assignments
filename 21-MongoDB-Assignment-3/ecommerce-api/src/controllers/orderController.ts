import { Request, Response } from "express";
import User from "../models/User";
import Product from "../models/Product";
import Order from "../models/Order";


// POST /orders - create an order
export const createOrder = async (req: Request, res: Response) => {
  try {
    const { customer_id, items } = req.body;

    if (!customer_id || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: "customer_id and items are required!" });
    }

    const customer = await User.findById(customer_id);
    if (!customer) {
      return res.status(404).json({ error: "Customer not found!" });
    }

    let total_amount = 0;
    const processedItems = [];

    for (const item of items) {
      const { product_id, quantity } = item;

      const product = await Product.findById(product_id);
      if (!product) {
        return res.status(404).json({ error: `Product ${product_id} not found.` });
      }

      if (product.stock < quantity) {
        return res.status(400).json({
          error: `Insufficient stock for ${product.name}. Available: ${product.stock}`
        });
      }

      const unit_price = product.price;
      const item_total = unit_price * quantity;
      total_amount += item_total;

      processedItems.push({ product_id, quantity, unit_price });

      product.stock -= quantity;
      await product.save(); // ← no session
    }

    const newOrder = new Order({
      customer_id,
      items: processedItems,
      total_amount,
      status: "pending",
      order_date: new Date(),
    });

    await newOrder.save();

    res.status(201).json({
      message: "Order placed successfully.",
      order: newOrder,
    });
  } catch (error: any) {
    console.error("Error placing order:", error.message || error);
    res.status(500).json({ error: error.message || "Server Error!" });
  }
};


// GET /orders — List and filter orders
export const getOrders = async (req: Request, res: Response) => {
  try {
    const { status } = req.query;

    const filter: any = {};

    if (status) {
      filter.status = status;
    }

    const orders = await Order.find(filter)
      .populate("customer_id", "username email") // include customer details
      .populate("items.product_id", "name price"); // include product details

    res.json({ total: orders.length, orders });
  } catch (error: any) {
    console.error("Error fetching orders:", error.message || error);
    res.status(500).json({ error: "Server Error" });
  }
};


// GET /users/:userId/orders — Get all orders for one customer
export const getOrdersByCustomer = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    // Validate MongoDB ID format
    if (!userId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: "Invalid user ID format" });
    }

    const orders = await Order.find({ customer_id: userId })
      .populate("items.product_id", "name price")
      .sort({ order_date: -1 });            // newest orders first

    res.json({ total: orders.length, orders });
  } catch (error: any) {
    console.error("Error fetching customer's orders:", error.message || error);
    res.status(500).json({ error: "Server Error" });
  }
};



// PATCH /orders/:id/status — Update order status
export const updateOrderStatus = async (req: Request, res: Response) => {
  try {
    const orderId = req.params.id;
    const { status } = req.body;

    // Validate input
    if (!["completed", "cancelled"].includes(status)) {
      return res.status(400).json({
        error: 'Status must be either "completed" or "cancelled".'
      });
    }

    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ error: "Order not found." });
    }

    if (order.status === status) {
      return res.status(400).json({ error: `Order is already ${status}.` });
    }

    // If status is being changed to "cancelled", restock products
    if (status === "cancelled") {
      for (const item of order.items) {
        const product = await Product.findById(item.product_id);
        if (product) {
          product.stock += item.quantity;
          await product.save();
        }
      }
    }

    // Update order status
    order.status = status;
    await order.save();

    res.json({ message: `Order status updated to ${status}.`, order });
  } catch (error: any) {
    console.error("Error updating order status:", error.message || error);
    res.status(500).json({ error: "Server error" });
  }
};
