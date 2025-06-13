import express from "express";
import {generateOTP,verifyOTP

} from "./otp.cotroller.js";
import { auth } from "../../middlewares/jwtAuth.js";

const router = express.Router();

router.route("/generate").post(generateOTP);
router.route("/verify").post(verifyOTP);



export default router;