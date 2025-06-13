import express from "express";
import {
  updateUserPassword,
  userLogin,
  userLogout,
  userRegisteration,
} from "./user.cotroller.js";
import { auth } from "../../middlewares/jwtAuth.js";

const router = express.Router();

router.route("/signup").post(userRegisteration);
router.route("/signin").post(userLogin);
router.route("/logout").get(userLogout);
router.route("/update/password").post(auth, updateUserPassword);

export default router;
