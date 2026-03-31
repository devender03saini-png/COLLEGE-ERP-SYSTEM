import { Schema, model } from "mongoose";

const periodSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    venue: String,
    teacher: String,
    type: {
        type: String,
        enum: ["lecture", "lab", "remedial", "makeup"],
        default: "lecture"
    },
    start: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    }

}, { _id: false });

const daySchema = new Schema({
    day: {
        type: String,
        required: true,
        enum: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    },
    periods: [periodSchema]
}, { _id: false });

const timetableSchema = new Schema({

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
        default: null
    },

    timeSlots: [
        {
            type: String,
            required: true
        }
    ],

    timetable: [daySchema]

}, { timestamps: true });


timetableSchema.index(
    { branch: 1, section: 1, group: 1 },
    { unique: true }
);

export default model("Timetable", timetableSchema); 