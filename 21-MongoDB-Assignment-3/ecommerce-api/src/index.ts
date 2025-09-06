import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";
import orderRoutes from "./routes/orderRoutes";


dotenv.config();

const app = express();

// Middleware
app.use(express.json());    // Parse JSON request bodies


// Sample Route
app.get("/", function (req: Request, res: Response) {
    res.send("API is running!");
});




// /users route
app.use("/users", userRoutes);


// /products route
app.use("/products", productRoutes)


// /orders route
app.use("/orders", orderRoutes);







// Start Server
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
    app.listen(PORT, function() {
        console.log(`Server is running on http://localhost:${PORT}`);
    })
})

