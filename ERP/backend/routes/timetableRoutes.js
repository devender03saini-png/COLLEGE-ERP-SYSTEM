import express from "express";
import {protect} from "../middleware/middleware.js";
import Student from "../models/student.js";
import Timetable from "../models/timetable.js";

const router = express.Router();

router.get("/test", (req, res) => {
    res.send("Timetable route working");
});

// GET /api/timetable
router.get("/", protect, async (req, res) => {
    try {
        //YOUR middleware gives full user object
        const userId = req.user._id;

        //Find student linked to this user
        const student = await Student.findOne({ user: userId });

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        //Extract class info
        const { branch, section, group } = student;

        //Find timetable
        const timetable = await Timetable.findOne({
            branch,
            section,
            group
        });

        if (!timetable) {
            return res.status(404).json({ message: "Timetable not found" });
        }

        // Sends responsse
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