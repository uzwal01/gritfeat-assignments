import mongoose, { Schema, Document } from "mongoose";

// TypeScript interface for type safety
export interface IUser extends Document {
    username: string;
    email: string;
    age?: number;
    country?: string;
    last_login?: Date;
    followers?: number;
    interests?: string;
    profile?: {
        theme?: string;
        bio?: string;
    };
    devices?: {
        type: string;
        os: string;
        last_seen: Date;
    }[];
    subscription?: {
        tier: string;
        start_date: Date;
    };
}


// Mongoose Schema Definition
const UserSchema: Schema = new Schema(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        age: { type: Number },
        country: { type: String },
        last_login: { type: Date },
        followers: { type: Number, default: 0 },
        interests: [{ type: String }],
        profile: { 
            theme: { type: String },
            bio: { type: String },
        },
        devices: [ 
            {
                type: { type: String },
                os: { type: String },
                last_seen: { type: Date },
            },
        ],
        subscription: {
            tier: { type: String },
            start_date: { type: Date },
        },
    },
    {
        timestamps: true,   // will automatically add createdAt and updatedAt
    }
);

export default mongoose.model<IUser>("User", UserSchema);