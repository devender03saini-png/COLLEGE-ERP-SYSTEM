import connectDB from "./config/db.js";
import app from "./app.js";

connectDB();

app.listen(3000, () => {
    console.log("http://localhost:3000");
});