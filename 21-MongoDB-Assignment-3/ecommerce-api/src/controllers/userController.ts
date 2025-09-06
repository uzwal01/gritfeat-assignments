import { Request, Response } from "express";
import User from "../models/User";
import { error, profile } from "console";


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



// GET /users - Search and list users with filters and pagination
export const getUsers = async (req: Request, res: Response) => {
    try {
        const {
            country, minFollowers, interest, profileTheme, subscriptionTier, page = 1, limit = 10,
        } = req.query;


        // Create a dynamic filter object
        const filter: any = {};

        if (country) filter.country = country;
        if (minFollowers) filter.followers = { $gte: Number(minFollowers) };
        if (interest) filter.interests = interest;
        if (profileTheme) filter["profile.theme"] = profileTheme;                    // targets nested object
        if (subscriptionTier) filter["subscription.tier"] = subscriptionTier;        // targets nested object


        // Convert pagination params to numbers
        const skip = (Number(page) - 1) * Number(limit);

        // Query the database
        const users = await User.find(filter).skip(skip).limit(Number(limit));

        // Get total count for pagination metadata
        const total = await User.countDocuments(filter);

        res.json({
            total,
            page: Number(page),
            limit: Number(limit),
            users,
        });
    }
    catch (error) {
        console.error("Error fetching users:", error)
        res.status(500).json({ error: "Server Error!"});
    }
};


// GET /users/:id - Get a single user by _id
export const getUserById = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;

        // Validate ID format
        if (!userId.match(/^[0-9a-fA-F]{24}$/)) {           // to check if a valid MongoDB ObjectId or not.
            return res.status(400).json({ error: "Invalid user ID format!" });
        }

        const user = await User.findById(userId);

        if(!user) {
            return res.status(404).json({ error: "User not found."});
        }

        res.json(user);
    }
    catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ error: "Server Error!"});
    }
}


// PATCH /users/:id - Update user profile (not username or email)
export const updateUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;

        // Validate MongoDB ObjectId
        if (!userId.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ error: "Invalid user ID format!"});
        }

        // Destructure forbidden fields (username/email)
        const { username, email, ...updateFields} = req.body;

        if (username || email) {
            return res.status(400).json({
                error: "Username and email cannot be updated from this endpoint.",
            });
        }

        // Update the user
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $set: updateFields },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ error: "User not found!" });
        }

        res.json(updateUser);
    } 
    catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ error: "Server Error!" });
    }
};


// DELETE /users/:id - Delete a User
export const deleteUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;

        // Validate ObjecttId format
        if (!userId.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ error: "Invalid user ID format!" });
        }

        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).json({ error: "User not found!" });
        }

        res.json({ message: "User Deleted Successfully!" });
    }
    catch (error) {
        console.error("Error Deleting user: ", error);
        res.status(500).json({ error: "Server Error!" });
    }
};