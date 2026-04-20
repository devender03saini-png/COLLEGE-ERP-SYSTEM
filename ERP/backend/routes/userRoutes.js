import express from "express";
import { loginUser,registerUser } from "../controllers/userController.js";
import { protect } from "../middleware/middleware.js";

const router = express.Router();

router.post("/login", loginUser);

router.post("/register", registerUser);

router.get("/verify", protect, (req, res) => {
    res.json({
        message: "Welcome to Dashboard",
        user: req.user
    });
});

export default router;
