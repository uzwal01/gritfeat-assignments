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
        };
        BLOGS.push(data);
        return data;
    },

    getAll() {
        return BLOGS;
    },

    getById(id: number): IBlog | undefined {
        return BLOGS.find((blog) => blog.id === id);
    },

    deleteById(id: number) {
        const blog = this.getById(id);
        if (!blog) return undefined;
        BLOGS = BLOGS.filter((blog) => blog.id !== id);
        return true;
    },

    updateById(id: number, payload: Partial<IBlogPayload>) {
        const blog = this.getById(id);
        if (!blog) return undefined;
        const newBlog: IBlog = {
            ...blog,
            ...payload,
        };
        BLOGS = BLOGS.map((blog) => (blog.id == id ? newBlog : blog));
        return newBlog;
    },
};

export default BlogRepository