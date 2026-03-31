import { Schema, model } from "mongoose";

const studentSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    collegeId: {
        type: String,
        required: true,
        unique: true
    },
    rollNo: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true,
        enum: ["CSE", "IT", "DS", "ECE", "ME", "CE"]
    },
    section: {
        type: String,
        required: true
    },
    group: {
        type: String, 
        trim: true,
        default: null
    },
    batch: {
        startYear: {
            type: Number,
            required: true
        },
        endYear: {
            type: Number,
            required: true
        }
    },
    semester: {
        type: Number,
        min: 1,
        max: 8,
        required: true
    },
    email: {
        type: String,
        unique: true,
        sparse: true
    },
    phone: String,
    address: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active"
    }

}, { timestamps: true });

export default model("Student", studentSchema);