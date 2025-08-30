import express, { Request, Response } from "express";
import { PORT } from "./config/env";


(() => {
    const app = express();

    app.use(express.json());

    app.get("/", function(req: Request, res: Response) {
        res.status(200).json({
            message: "Server is running..",
        });
    });



    app.listen(PORT, () => {
        console.log(`The application is running at port: ${PORT}`);
    })

})();
