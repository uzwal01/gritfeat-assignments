import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();   // loads .env

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI!);
        console.log("MongoDB Connected!");
    }
    catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);    // stop the app if connection fails
    }
};

