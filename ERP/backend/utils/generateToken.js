import jwt from "jsonwebtoken";

export const generateToken = (id) => {
  return jwt.sign({ id }, "mysupersecretkey", { expiresIn: "1h" });
};