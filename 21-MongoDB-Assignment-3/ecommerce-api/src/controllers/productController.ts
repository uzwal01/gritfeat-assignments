import { Request, Response } from "express";
import Product from "../models/Product";
import { error } from "console";
import { json } from "stream/consumers";

// POST /products - Create a new product
export const createProduct = async (req: Request, res: Response) => {
    try {
        const { name, category, brand, price, stock, features } = req.body;
        
        // Validate required fields
        if (!name || !category || !brand || price === undefined || stock === undefined) {
            return res.status(400).json({
                error: "name, category, brand, price and stock are required!",
            });
        }

        const newProduct = new Product({
            name,
            category,
            brand,
            price,
            stock,
            features,
            reviews: [],   // Start with empty reviews
        });

        await newProduct.save();
        res.status(201).json(newProduct);
    } 
    catch (error) {
        console.error("Error Creating product:", error);
        res.status(500).json({ error: "Server Error!" });
    }
};


// GET /products - List, search and filter products
export const getProducts = async (req: Request, res: Response) => {
    try {
        const { category, minPrice, maxPrice, maxStock, hasReviews} = req.query;

        const filter: any = {};

        // Apply filters dynamically
        if (category) {
            filter.category = category;
        }
        
        if (minPrice || maxPrice) {
            filter.price = {};
            if (minPrice) filter.price.$gte = Number(minPrice);
            if (maxPrice) filter.price.$lte = Number(maxPrice);
        }

        if (maxStock) {
            filter.stock = { $lte: Number(maxStock) };
        }

        if (hasReviews) {
            filter.reviews = { $size: 0 };  // Mongoose way to find empty arrays
        }

        const products = await Product.find(filter);

        res.json({ total: products.length, products });
    }
    catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: "Server Error!"});
    }
};


// POST /products/:id/reviews - Add a review to a product
export const addReviewToProduct = async (req: Request, res: Response) => {
    try {
        const productId = req.params.id;
        const { user, rating, comment } = req.body;

        // Validate required fields
        if (!user || !rating) {
            return res.status(400).json({ error: "User and rating are required." });
        }

        // Validate ObjectId format
        if (!productId.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ error: "Invalid Product ID format!" });
        }

        // Find the product
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: "Product not found!" });
        }

        // Push the new review into the reviews array
        product.reviews.push({ user, rating, comment });

        // Save the updated product
        await product.save();

        res.status(201).json({ message: "Review added successfully!" });
    }
    catch (error) {
        console.error("Error adding review:", error);
        res.status(500).json({ error: "Server Error!" });
    }
};



// PATCH /products/:id - Update product details
export const updateProduct = async (req: Request, res: Response) => {
    try {
        const productId = req.params.id;

        // Validate ObjectId format
        if (!productId.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ error: "Invalid Product ID format!" });
        }

        const updateFields = req.body;

        // Prevent _id update
        if (updateFields._id) {
            delete updateFields._id;
        }

        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            { $set: updateFields },
            { new: true, runValidators: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ error: "Product not Found!"});
        }

        res.json({ message: "Product updated successfully", product: updatedProduct }); 
    }
    catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ error: "Server Error!"});
    }
};


// DELETE /products/:id - Delete a product
export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const productId = req.params.id;

        // Validate ObjectId format
        if (!productId.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ error: "Invalid Product ID format!" });
        }

        const deletedProduct = await Product.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).json({ error: "Product not found!" });
        }

        res.json({ message: "Product deleted successfully!" });
    }
    catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ error: "Server Error!" });
    }
};
