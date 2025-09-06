import express from "express";
import { createOrder, getOrders, updateOrderStatus } from "../controllers/orderController";


const router = express.Router();


// POST /orders - place an order
router.post("/", createOrder);

// GET /orders — list + filter
router.get("/", getOrders);

// PATCH /orders/:id/status — update order status
router.patch("/:id/status", updateOrderStatus);


export default router;