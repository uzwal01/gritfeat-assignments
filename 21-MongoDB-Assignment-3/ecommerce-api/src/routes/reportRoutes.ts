import express from "express";
import { getMonthlySalesReport, getTopSellingProducts, getTotalRevenue } from "../controllers/reportController";

const router = express.Router();


// GET /reports/revenue - total completed order revenue
router.get("/revenue", getTotalRevenue);

// GET /reports/top-products — top-selling products
router.get("/top-products", getTopSellingProducts);

// GET /reports/monthly-sales — sales per month
router.get("/monthly-sales", getMonthlySalesReport);


export default router;