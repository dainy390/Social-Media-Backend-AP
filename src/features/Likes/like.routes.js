import express from "express";
import {
    like ,unlike,getLikesByPost,getLikesByComment,GetLike
} from "./like.cotroller.js";
import { auth } from "../../middlewares/jwtAuth.js";

const router = express.Router();

router.route("/:postId").post(like);
router.route("/comment/:commentId").get(getLikesByComment);
router.route("/post/:postId").get(getLikesByPost);
router.route("/getLike").get(GetLike);
router.route("/toggle/:postId").delete(unlike);


export default router;