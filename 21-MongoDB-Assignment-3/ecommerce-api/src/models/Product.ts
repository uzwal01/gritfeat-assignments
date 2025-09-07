import mongoose, { Schema, Document, Types } from "mongoose";
    

// Define an interface for a review sub-document
export interface IReview extends Document {
  user: string;
  rating: number;
  comment: string;
}

export interface IProduct extends Document {
  name: string;
  category: string;
  brand: string;
  price: number;
  stock: number;
  features: string[];
  reviews: Types.DocumentArray<IReview>; 
}

// Update a Product Review - for task 18
const reviewSchema = new mongoose.Schema(
  {
    user: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String },
  },
  {
    timestamps: true,
    _id: true // ensures each review has a unique ID
  }
);


// Define the schema
const ProductSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        category: { type: String, required: true },
        brand: { type: String, required: true },
        price: { type: Number, required: true },
        stock: { type: Number, required: true },
        features: [{ type: String }],
        reviews: [reviewSchema]

    },
    {
        timestamps: true,
    }
);





export default mongoose.model<IProduct>("Product", ProductSchema);