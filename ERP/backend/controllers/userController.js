import bcrypt from "bcryptjs";
import User from "../models/user.js";
import { generateToken } from "../utils/generateToken.js";

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: "Wrong password" });
        }

        const token = generateToken(user._id);

        //send response
        res.json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                email: user.email,
                name: user.name,
                role: user.role
            }
        });

    } catch (error) {
        console.log("Login user consolelog", error)
        res.status(500).json({ message: "Server error" });
    }
};

export const registerUser = async (req, res) => {
    try {
        const { email, password, name, role, userId } = req.body;

        const existingUser = await User.findOne({
            $or: [{ email }, { userId }]
        });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            email,
            password: hashedPassword,
            name,
            role,
            userId
        });

        res.status(201).json({
            message: "User created successfully",
            user: {
                id: user._id,
                email: user.email,
                name: user.name,
                role: user.role,
                userId: user.userId
            }
        });

    } catch (error) {
        console.log("REgister user consolelog", error)
        res.status(500).json({ message: error.message || "Server error" });
    }
};
