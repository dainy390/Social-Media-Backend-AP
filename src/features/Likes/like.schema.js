import mongoose from 'mongoose';

export const likeSchema = new mongoose.Schema({
    postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
    commentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  });