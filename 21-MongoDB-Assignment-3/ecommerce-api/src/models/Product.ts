import mongoose, { Schema, Document } from "mongoose";
    

// Define an interface for a review sub-document
interface IReview {
    user: string;
    rating: number;
    comment: string;
}

// TypeScript interface for the whole product document
export interface IProduct extends Document {
    name: string;
    category: string;
    brand: string;
    price: number;
    stock: number;
    features: string[];
    reviews: IReview[];
}

// Define the schema
const ProductSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        category: { type: String, required: true },
        brand: { type: String, required: true },
        price: { type: Number, required: true },
        stock: { type: Number, required: true },
        features: [{ type: String }],
        reviews: [
            {
                user: { type: String, required: true },
                rating: { type: Number, required: true, min: 1, max: 5 },
                comment: { type:String },
            },
        ],
    },
    {
        timestamps: true,
    }
);

export default mongoose.model<IProduct>("Product", ProductSchema);