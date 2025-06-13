import mongoose from 'mongoose';
import { customErrorHandler } from "../../middlewares/errorHandler.js";
import {postSchema} from './post.schema.js';
const PostModel = mongoose.model("Post", postSchema);

export const createPost = async (postData) => {
  try {
    const post = await PostModel.create(postData);
    return post;
  } catch (error) {
    throw error; // Rethrow the error for the controller to handle
  }
}

export const getPostById = async (postId) => {
  try {
    const post = await PostModel.findById(postId);
    return post;
  } catch (error) {
    throw error;
  }
}

export const getAllPosts = async () => {
    try{
        const posts = await PostModel.find();
        return posts;
    } catch (error) {
        throw error;
    }
}

export const updatePost = async (postId, updateData) => {
    try{
        const post = await PostModel.findByIdAndUpdate(postId, updateData, {new: true});
        return post;
    } catch (error) {
        throw error;
    }
}

export const deletePost = async (postId) => {
    try{
        const post = await PostModel.findByIdAndDelete(postId);
        return post;
    } catch (error) {
        throw error;
    }
}
