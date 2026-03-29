import { hash } from "bcryptjs";

import connectDB from "./config/db.js";
import User from "./models/user.js";

const insertUser = async () => {
  try {

    // Connect DB FIRST
    await connectDB();

    // credentials
    const email = "st@cogllege.com";
    const password = "admin123";
    const name = "Admin User";
    const role = "student";
    const userId = "AdDMec001";

    // check existing
    const existingUser = await User.findOne({
      $or: [{ email }, { userId }]
    });

    if (existingUser) {
      console.log("User already exists");
      process.exit();
    }

    const hashedPassword = await hash(password, 10);

    // create user
    const user = new User({
      email,
      password: hashedPassword,
      name,
      role,
      userId
    });

    // save
    await user.save();

    console.log("User inserted successfully!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

    process.exit();

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

insertUser();