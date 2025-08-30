import { Request, Response } from "express";
import BlogService from "./service";



const BlogController = {

    getAll(req: Request, res: Response) {
        try {
            const blogs = BlogService.getAll();
            res.status(200).json(blogs);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    },

    getById(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const blog = BlogService.getById(id);
            res.status(200).json(blog);
        } catch (error: any) {
            res.status(404).json({ message: error.message });
        }
    },

    create(req: Request, res: Response) {
        try {
            const body = req.body;
            const blog = BlogService.create(body);
            res.status(201).json(blog);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    },

    updateById(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const blog = BlogService.updateById(id, req.body);
            res.status(200).json(blog);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    },

    deleteById(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            BlogService.deleteById(id);
            res.status(204).send();
        } catch (error: any) {
            res.status(404).json({ message: error.message })
        }
    }
}

export default BlogController;