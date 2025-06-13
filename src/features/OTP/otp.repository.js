import mongoose from 'mongoose';
import { customErrorHandler } from "../../middlewares/errorHandler.js";
import {otpSchema} from './otp.schema.js';
const OTPModel = mongoose.model("OTP", otpSchema);

export const  createOTP= async (otpData) => {
    try {
      const otp = await OTPModel.create(otpData);
      return otp;
    } catch (error) {
      throw error;
    }
  }

  export const getOTP = async (query) => {
    try {
      const otp = await OTPModel.findOne(query);
      return otp;
    } catch (error) {
      throw error;
    }
  }

  export const deleteOTP = async (query) => {
    try {
      const result = await OTPModel.deleteOne(query);
      return result;
    } catch (error) {
      throw error;
    }
  }
