
import { Request, Response } from 'express';
import BlogService from './service';

const BlogController = {
  async create(req: Request, res: Response) {
    try {
      const post = await BlogService.create(req.user!.userId, req.body);
      res.status(201).json(post);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },

  async getAll(req: Request, res: Response) {
    try {
      const posts = await BlogService.getAll(req.user!.userId, req.user!.role);
      res.status(200).json(posts);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },

  async getById(req: Request, res: Response) {
    try {
      const post = await BlogService.getById(req.params.postId, req.user!.userId, req.user!.role);
      res.status(200).json(post);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  },

  async updateById(req: Request, res: Response) {
    try {
      const post = await BlogService.updateById(
        req.params.postId,
        req.user!.userId,
        req.user!.role,
        req.body
      );
      res.status(200).json(post);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },

  async deleteById(req: Request, res: Response) {
    try {
      const result = await BlogService.deleteById(
        req.params.postId,
        req.user!.userId,
        req.user!.role
      );
      res.status(200).json(result);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  },
};

export default BlogController;
