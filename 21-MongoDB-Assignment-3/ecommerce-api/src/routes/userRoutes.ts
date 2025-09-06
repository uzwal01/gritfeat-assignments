import express from "express";
import { createUser, deleteUser, getUserById, getUsers, updateUser } from "../controllers/userController";
import { getOrdersByCustomer } from "../controllers/orderController";

const router = express.Router();

// POST /users
router.post("/", createUser);

// GET /users - with filters and pagination
router.get("/", getUsers);

// Get /users/:id - Get a single user by _id
router.get("/:id", getUserById);

// PATCH /users/:id - Update user profile (not username or email)
router.patch("/:id", updateUser);

// DELETE /users/:id - Delete a user
router.delete("/:id", deleteUser);




// Nested route: GET /users/:userId/orders
router.get("/:userId/orders", getOrdersByCustomer);



export default router;