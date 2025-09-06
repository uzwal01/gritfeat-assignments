import { Request, Response } from "express";
import User from "../models/User";
import { error } from "console";


// POST /users - Create a new user
export const createUser = async (req: Request, res: Response) => {
    try {
        const { username, email, ...rest } = req.body;
        
        // Validate required fields
        if (!username || !email) {
            return res.status(400).json({ error: "Username and email are required."});
        }

        // Check for duplicate user
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(409).json({ error: "Username or email already exists."});
        }

        // Create and save user
        const newUser = new User({ username, email, ...rest});
        await newUser.save();

        res.status(201).json(newUser);
    }   
    catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Server error!"});
    }
};