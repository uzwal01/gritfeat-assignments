import { Request, Response } from "express";
import Order from "../models/Order";


// GET /reports/revenue - Total revenue from completed orders
export const getTotalRevenue = async (req: Request, res: Response) => {
    try {
        const result = await Order.aggregate([
            { $match: { status: "completed" } },
            {
                $group: {
                    _id: null,
                    totalRevenue: { $sum: "$total_amount" }
                }
            }
        ]);

        const totalRevenue = result[0]?.totalRevenue || 0;

        res.json({ totalRevenue });
    }
    catch (error: any) {
        console.error("Error generating revenue report:", error.message || error);
        res.status(500).json({ error: "Server Error!" });
    }
};



// GET /reports/top-products — Top-selling products
export const getTopSellingProducts = async (req: Request, res: Response) => {
    try {
        const result = await Order.aggregate([
            { $unwind: "$items" },
            {
                $group: {
                    _id: "$items.product_id",
                    totalQuantitySold: { $sum: "$items.quantity" }
                }
            },
            {
                $lookup: {
                    from: "products",       // Collection name in MongoDB (must match actual collection)
                    localField: "_id",
                    foreignField: "_id",
                    as: "product",
                }
            },
            {
                $unwind: "$product"
            },
            {
                $project: {
                    _id: 0,
                    productId: "$product_name",
                    name: "$product.name",
                    category: "$product.category",
                    totalQuantitySold: 1
                }
            },
            { $sort: { totalQuantitySold: -1 } }
        ]);

        res.json({ count: result.length, topProducts: result });
    }
    catch (error: any) {
        console.error("Error generating top-selling report:", error.message || error);
        res.status(500).json({ error: "Server Error!" });
    }
};



// GET /reports/monthly-sales — Sales by month/year
export const getMonthlySalesReport = async (req: Request, res: Response) => {
  try {
    const report = await Order.aggregate([
      {
        $match: { status: "completed" } // Only completed orders
      },
      {
        $group: {
          _id: {
            year: { $year: "$order_date" },
            month: { $month: "$order_date" }
          },
          totalSales: { $sum: "$total_amount" }
        }
      },
      {
        $sort: {
          "_id.year": -1,
          "_id.month": -1
        }
      },
      {
        $project: {
          _id: 0,
          year: "$_id.year",
          month: "$_id.month",
          totalSales: 1
        }
      }
    ]);

    res.json({ monthlySales: report });
  } catch (error: any) {
    console.error("Error generating monthly sales report:", error.message || error);
    res.status(500).json({ error: "Server error" });
  }
};
