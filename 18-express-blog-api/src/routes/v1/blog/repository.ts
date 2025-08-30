import { IBlog, IBlogPayload } from "./types";

let BLOGS: Array<IBlog> = [];

const BlogRepository = {
    getNextId(): number {
        return BLOGS.length + 1;
    },

    create(payload: IBlogPayload): IBlog {
        const data = {
            ...payload,
            id: this.getNextId(),
            createdAt: new Date().toISOString(),
        };
        BLOGS.push(data);
        return data;
    },

    getAll(): IBlog[] {
        return BLOGS;
    },

    getById(id: number): IBlog {
        const blog = BLOGS.find((blog) => blog.id === id);

        if(!blog) throw new Error("Blog not found!");
        return blog;
    },

   deleteById(id: number): void {
    const blog = this.getById(id); 
    BLOGS = BLOGS.filter((b) => b.id !== blog.id);
  },

    updateById(id: number, payload: Partial<IBlogPayload>):IBlog {
        const blog = this.getById(id);
        const updatedBlog: IBlog = {
            ...blog,
            ...payload,
            createdAt: blog.createdAt,
        };
        BLOGS = BLOGS.map((blog) => (blog.id == id ? updatedBlog : blog));
        return updatedBlog;
    },
};

export default BlogRepository