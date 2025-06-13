import express from "express";
import {
  CreatePost,
  GetPostById,
  GetAllPosts,
  UpdatePost,
  DeletePost
} from "./post.cotroller.js";
import { auth } from "../../middlewares/jwtAuth.js";

const router = express.Router();

router.route("/").post(CreatePost);
router.route("/:postId").get(GetPostById);
router.route("/").get(GetAllPosts);
router.route("/:postId").put(UpdatePost);
router.route("/:postId").delete(DeletePost);
export default router;