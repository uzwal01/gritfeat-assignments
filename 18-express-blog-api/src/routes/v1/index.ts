import { Router } from "express";
import BlogRouter from "./blog";
import AuthRouter from "./auth";


const router = Router();


// Grouping under v1
router.use("/blogs", BlogRouter)
router.use("/auth", AuthRouter)


export default router;