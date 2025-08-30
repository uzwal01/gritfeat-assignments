import { Router } from "express";
import BlogRouter from "./blog"

const router = Router();


// Grouping under v1
router.use("/blogs", BlogRouter)


export default router