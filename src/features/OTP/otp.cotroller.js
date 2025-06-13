import { customErrorHandler } from "../../middlewares/errorHandler.js";
import {
    createOTP,getOTP,deleteOTP
} from "./otp.repository.js";

export const generateOTP = async (req, res) => {
    try {
      // Generate a 6-digit OTP (replace with a more secure method in production)
      const otp = Math.floor(100000 + Math.random() * 900000).toString();

      const expiresAt = new Date(Date.now() + 300000); // 5 minutes expiration

      const otpData = {
        userId: req.body.userId,
        otp: otp,
        expiresAt: expiresAt,
      };

      const createdOTP = await createOTP(otpData);

      res.status(201).json({ message: 'OTP generated', otp: otp, expiresAt: expiresAt }); // Send the OTP only for testing.
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  export const verifyOTP = async (req, res) => {
    try {
      const { userId, otp } = req.body;

      const foundOTP = await getOTP({
        userId: userId,
        otp: otp,
        expiresAt: { $gt: new Date() }, // Check if not expired
      });

      if (foundOTP) {
        await deleteOTP({ _id: foundOTP._id });
        res.status(200).json({ message: 'OTP verified' });
      } else {
        res.status(400).json({ message: 'Invalid or expired OTP' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }