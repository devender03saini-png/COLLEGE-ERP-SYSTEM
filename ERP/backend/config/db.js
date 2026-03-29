import { connect } from "mongoose";

const connectDB = async () => {
  try {
    await connect(
      "mongodb://devender03saini_db_user:tEwyGDOzyKX9fDDT@ac-u6nkyvb-shard-00-00.lwj3ipi.mongodb.net:27017,ac-u6nkyvb-shard-00-01.lwj3ipi.mongodb.net:27017,ac-u6nkyvb-shard-00-02.lwj3ipi.mongodb.net:27017/college_db?ssl=true&replicaSet=atlas-kqm0ik-shard-0&authSource=admin&appName=Cluster0"
    );
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};
export default connectDB;