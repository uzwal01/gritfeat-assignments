import BlogRepository from "./repository";
import { IBlog, IBlogPayload } from "./types";


const BlogService = {
    getAll(): IBlog[] {
        return BlogRepository.getAll();   // Simply runs all blogs
    },

    getById(id: number): IBlog {
        return BlogRepository.getById(id);   // Repository already throws if blog not found
    },

    deleteById(id: number): void {
        BlogRepository.deleteById(id);         // Repository throws error if blog not found
    },

    create(payload: IBlogPayload): IBlog {
        if (!payload.title || !payload.content) {
            throw new Error("Title and content are required.")
        }

        return BlogRepository.create(payload);
    },

    updateById(id: number, payload: Partial<IBlogPayload>): IBlog {
        if (payload.title === "" || payload.content === "") {
            throw new Error("Title and content cannot be empty.");
        }

        const updatedBlog = BlogRepository.updateById(id, payload);
        if (!updatedBlog) throw new Error("Blog not found to update.");

        return updatedBlog;
    },
};


export default BlogService;