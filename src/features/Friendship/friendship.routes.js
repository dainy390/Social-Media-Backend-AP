import express from "express";
import {
    sendFriendRequest,acceptFriendRequest,rejectFriendRequest,getFriendRequests,GetFriendships,DeleteFriend
} from "./friendship.cotroller.js";
import { auth } from "../../middlewares/jwtAuth.js";

const router = express.Router();

router.route("/").post(sendFriendRequest);
router.route("/accept").put(acceptFriendRequest);
router.route("/reject").put(rejectFriendRequest);
router.route("/get-friends/:userId").get(getFriendRequests);
router.route("/toggle-friendship/:userId").get(GetFriendships);
router.route("/delete/:friendId").delete(DeleteFriend);




export default router;