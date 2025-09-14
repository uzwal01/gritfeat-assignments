import { Schema, model, Document, Types } from 'mongoose';

export type UserRole = 'admin' | 'blogger';

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: UserRole;
  _id: Types.ObjectId;  
  createdAt: Date;
  updatedAt: Date;
}



const userSchema = new Schema<IUser>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ['admin', 'blogger'],
      default: 'admin',
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt automatically
  }
);


const User = model<IUser>('User', userSchema);

export default User;