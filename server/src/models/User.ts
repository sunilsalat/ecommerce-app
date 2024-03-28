import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "name is required"],
        },
        role: {
            type: String,
        },
        email: {
            type: String,
            required: [true, "email is required"],
        },
    },

    { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);
