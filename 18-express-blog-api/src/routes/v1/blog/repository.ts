
import Post, { IPost } from '../../../models/post.model';

export const createPost = async (postData: Partial<IPost>) => {
  return Post.create(postData);
};

export const findPostsByUser = async (userId: string) => {
  return Post.find({ author: userId });
};

export const findAllPosts = async () => {
  return Post.find();
};

export const findPostById = async (postId: string, userId?: string, role?: string) => {
  if (role === 'admin') {
    return Post.findById(postId);
  }
  return Post.findOne({ _id: postId, author: userId });
};