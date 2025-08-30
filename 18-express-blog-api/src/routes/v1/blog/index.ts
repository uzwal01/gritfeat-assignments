import { Router } from "express";
import BlogController from "./controller";

const router = Router();

// Routes
router.get("/", BlogController.getAll);
router.get("/:id", BlogController.getById);
router.post("/", BlogController.create);
router.put("/:id", BlogController.updateById);
router.delete("/:id", BlogController.deleteById);



export default router