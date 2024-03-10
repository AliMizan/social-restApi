import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import authRoute from "./routes/auth.js"
import userRoute from "./routes/user.js"
import postRoute from './routes/posts.js'

const app = express();
dotenv.config();


mongoose.connect(
  process.env.MONGO_DB_URL
);

app.use(express.json());



app.use("/api/auth",authRoute );
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(8000, () => {
  console.log("Backend server is running!");
});