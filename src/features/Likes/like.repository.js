import mongoose from 'mongoose';
import { customErrorHandler } from "../../middlewares/errorHandler.js";
import {likeSchema} from './like.schema.js';
const LikeModel = mongoose.model("Like", likeSchema);

export const  createLike = async (likeData) => {
    try {
      const like = await LikeModel.create(likeData);
      return like;
    } catch (error) {
      throw error;
    }
  }

  export const deleteLike = async (query) => {
    try {
      const result = await LikeModel.deleteOne(query);
      return result;
    } catch (error) {
      throw error;
    }
  }

  export const getLikesByPostId = async (postId) => {
    try {
      const likes = await LikeModel.find({ postId: postId });
      return likes;
    } catch (error) {
      throw error;
    }
  }

  export const getLikesByCommentId = async (commentId) => {
    try {
      const likes = await LikeModel.find({ commentId: commentId });
      return likes;
    } catch (error) {
      throw error;
    }
  }

  export const getLike = async (query) => {
    try {
      const like = await LikeModel.findOne(query);
      return like;
    } catch (error) {
      throw error;
    }
  }
