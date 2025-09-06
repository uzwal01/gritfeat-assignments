import express from "express";
import { addReviewToProduct, createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/productController";

const router = express.Router();


// POST /products - create a product
router.post("/", createProduct);

// GET /products - products list with search + filters 
router.get("/", getProducts);

// POST /products/:id/reviews - Add a review
router.post("/:id/reviews", addReviewToProduct);

// PATCH /products/:id - Update a product
router.patch("/:id", updateProduct);

// DELETE /products/:id - Delete a product
router.delete("/:id", deleteProduct);



export default router;