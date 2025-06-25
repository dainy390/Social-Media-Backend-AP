import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cookieParser from "cookie-parser";

// Import routers
import userRouter from "./src/features/users/user.routes.js";
import postRouter from "./src/features/Posts/post.routes.js";
import commentRouter from "./src/features/Comments/comment.routes.js";
import likeRouter from "./src/features/Likes/like.routes.js";
import friendshipRouter from "./src/features/Friendship/friendship.routes.js";
import otpRouter from "./src/features/OTP/otp.routes.js";

// Import error handler and DB connection
import { appLevelErrorHandlerMiddleware } from "./src/middlewares/errorHandler.js";
import { connectToDb } from "./src/config/db.js";

const app = express();

// Middlewares
app.use(cookieParser());
app.use(express.json());

// Root route (to avoid "Cannot GET /")
app.get("/", (req, res) => {
  res.send("🚀 Social Media Backend API is running!");
});

// Feature Routes
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/comments", commentRouter);
app.use("/api/likes", likeRouter);
app.use("/api/friends", friendshipRouter);
app.use("/api/otp", otpRouter);

// Global Error Handler
app.use(appLevelErrorHandlerMiddleware);

// PORT configuration (important for Render)
const PORT = process.env.PORT || 3000;

// Start server and connect to DB
app.listen(PORT, async () => {
  await connectToDb(); // Ensure MongoDB connection before starting
  console.log(` Server is running on port ${PORT}`);
});
