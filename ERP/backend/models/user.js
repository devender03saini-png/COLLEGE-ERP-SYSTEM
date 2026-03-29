import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        enum: ["admin", "student", "teacher"],
        required: true,
        lowercase: true
    },
    userId: {
        type: String,
        required: true,
        unique: true,
        uppercase: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},
    {
        timestamps: true
    }
);

const User = mongoose.model("User", userSchema);

export default User;