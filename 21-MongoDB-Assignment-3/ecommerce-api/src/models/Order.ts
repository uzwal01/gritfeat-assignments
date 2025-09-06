import mongoose, { Schema, Document, Types } from "mongoose";

// Type for each item inside the order
interface IOrderItem {
    product_id: Types.ObjectId;     // Will reference a product document
    quantity: number;
    unit_price: number;
}

// Main interface for whole order
export interface IOrder extends Document {
    customer_id: Types.ObjectId;        // will reference a User document
    order_date: Date;
    items: IOrderItem[];
    status: "pending" | "completed" | "cancelled";
    total_amount: number;
}

// Define Schema
const OrderSchema: Schema = new Schema (
    {
        customer_id: {
            type: Schema.Types.ObjectId,
            ref: "User",   // references User Collection
            required: true,
        },
        order_date: {
            type: Date,
            default: Date.now,
        },
        // nested items
        items: [
            {
                product_id: {
                    type: Schema.Types.ObjectId,
                    ref: "Product",     // references Product Collection
                    required: true,
                },
                quantity: { type: Number, required: true },
                unit_price: { type: Number, required: true },
            },
        ],
        status: {
            type: String,
            enum: ["pending", "completed", "cancelled"],
            default: "pending",
        },
        total_amount: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);


export default mongoose.model<IOrder>("Order", OrderSchema);

