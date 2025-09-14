
import { createPostSchema, updatePostSchema } from './validators';
import { createPost, findPostsByUser, findAllPosts, findPostById } from './repository';
import Post from '../../../models/post.model';

const BlogService = {
  async create(userId: string, body: any) {
    const parsed = createPostSchema.safeParse(body);
    if (!parsed.success) {
      throw new Error('Validation failed');
    }

    const { title, body: content } = parsed.data;

    const post = await createPost({
      title,
    body: content,
    author: userId,
    createdBy: userId,
    updatedBy: userId,
    });

    return post;
  },

  async getAll(userId: string, role: string) {
    if (role === 'admin') {
      return findAllPosts();
    }
    return findPostsByUser(userId);
  },

  async getById(postId: string, userId: string, role: string) {
    const post = await findPostById(postId, userId, role);
    if (!post) throw new Error('Post not found or not authorized');
    return post;
  },

  async updateById(postId: string, userId: string, role: string, body: any) {
    const parsed = updatePostSchema.safeParse(body);
    if (!parsed.success) {
      throw new Error("Validation failed");
    }

    const post = await findPostById(postId, userId, role);
    if (!post) throw new Error("Post not found or not authorized");

    const { title, body: content } = parsed.data;

    if (title) post.title = title;
    if (content) post.body = content;

    post.updatedBy = userId;

    await post.save();
    return post;
  },

  async deleteById(postId: string, userId: string, role: string) {
    const post = await findPostById(postId, userId, role);
    if (!post) throw new Error('Post not found or not authorized');

    await Post.deleteOne({ _id: post._id });
    return { message: 'Post deleted successfully' };
  },
};

export default BlogService;







