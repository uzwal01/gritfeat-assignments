import express, { Request, Response } from "express";
import connectDB, { PORT } from "./config/env";
import router from "./routes"
import dotenv from 'dotenv';

dotenv.config();

(() => {
    const app = express();

    connectDB();

    app.use(express.json());

    app.get("/", function(req: Request, res: Response) {
        res.status(200).json({
            message: "Server is running..",
        });
    });

    app.use("/api", router);

    app.all(/.*/, function(req: Request, res: Response) {
        res.status(404).json({ message: "Path not found" });
    })

    app.listen(PORT, () => {
        console.log(`The application is running at port: ${PORT}`);
    })

})();
