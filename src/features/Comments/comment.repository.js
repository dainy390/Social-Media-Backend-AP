import mongoose from 'mongoose';
import { customErrorHandler } from "../../middlewares/errorHandler.js";
import {commentSchema} from './comment.schema.js';
const commentModel = mongoose.model("Comment", commentSchema);

export const createComment = async (commentData) => {
    try {
      const comment = await commentModel.create(commentData);
      return comment;
    } catch (error) {
      throw error;
    }
  }

  export const getCommentById = async (commentId) => {
    try {
      const comment = await commentModel.findById(commentId);
      return comment;
    } catch (error) {
      throw error;
    }
  }

  export const getAllCommentsForPost = async (postId) => {
    try {
      const comments = await commentModel.find({ postId: postId });
      return comments;
    } catch (error) {
      throw error;
    }
  }

  export const updateComment = async (commentId, updateData) => {
    try {
      const comment = await commentModel.findByIdAndUpdate(commentId, updateData, { new: true });
      return comment;
    } catch (error) {
      throw error;
    }
  }
  export const deleteComment = async (commentId) => {
    try {
      const comment = await commentModel.findByIdAndDelete(commentId);
      return comment;
    } catch (error) {
      throw error;
    }
  }
