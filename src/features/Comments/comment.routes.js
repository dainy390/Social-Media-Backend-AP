import express from "express";
import {
    CreateComment,
    GetCommentById,
    GetAllCommentsForPost,
    UpdateComment,
    DeleteComment
} from "./comment.cotroller.js";
import { auth } from "../../middlewares/jwtAuth.js";

const router = express.Router();

router.route("/:postId").post(CreateComment);
router.route("/:commentId").get(GetCommentById);
router.route("/post/:postId").get(GetAllCommentsForPost);
router.route("/:commentId").put(UpdateComment);
router.route("/:commentId").delete(DeleteComment);
export default router;