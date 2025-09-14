import { Schema, model, Document, Types } from 'mongoose';

export interface IPost extends Document {
  title: string;
  body: string;
  author: Types.ObjectId | string;
  createdBy: Types.ObjectId | string;
  updatedBy: Types.ObjectId | string;
  createdAt: Date;
  updatedAt: Date;
}



const postSchema = new Schema<IPost>(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },

    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt
  }
);


const Post = model<IPost>('Post', postSchema);

export default Post;