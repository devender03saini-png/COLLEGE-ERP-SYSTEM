import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const protect = async (req, res, next) => {

    const token = req.headers["authorization"]?.split(" ")[1];//extracting token

    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    try {
        const decoded = jwt.verify(token, "mysupersecretkey");

        req.user = decoded;

        const user = await User.findById(decoded.id).select("-password");
        req.user = user;

        next();

    }

    catch (err) {
        res.status(401).json({ message: "Invalid token" });
        console.log("This catch from middleware.js")
    }
};