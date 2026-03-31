import express from "express";
import {protect} from "../middleware/middleware.js";
import Student from "../models/student.js";
import Timetable from "../models/timetable.js";

const router = express.Router();

router.get("/test", (req, res) => {
    res.send("Timetable route working");
});

router.get("/", protect, async (req, res) => {
    try {
        const userId = req.user._id;

        const student = await Student.findOne({ user: userId });

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        const { branch, section, group } = student;

        const timetable = await Timetable.findOne({
            branch,
            section,
            group
        });

        if (!timetable) {
            return res.status(404).json({ message: "Timetable not found" });
        }

        res.json({
            timeSlots: timetable.timeSlots,
            timetable: timetable.timetable
        });

    } catch (err) {
        console.log("timetableRoutes Catch try error part")
        console.log("Timetable route error:", err);
        res.status(500).json({ message: "Server error" });
    }
});

export default router;