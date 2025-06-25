import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cookieParser from "cookie-parser";

import userRouter from "./src/features/users/user.routes.js";
import postRouter from "./src/features/Posts/post.routes.js";
import commentRouter from "./src/features/Comments/comment.routes.js";
import likeRouter from "./src/features/Likes/like.routes.js";
import friendshipRouter from "./src/features/Friendship/friendship.routes.js";
import otpRouter from "./src/features/OTP/otp.routes.js";
import { appLevelErrorHandlerMiddleware } from "./src/middlewares/errorHandler.js";

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/comments", commentRouter);
app.use("/api/likes", likeRouter);
app.use("/api/friends", friendshipRouter);
app.use("/api/otp", otpRouter);


export default app;
