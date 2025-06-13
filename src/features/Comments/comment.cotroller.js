
import { customErrorHandler } from "../../middlewares/errorHandler.js";
import {
    createComment,
    getCommentById,
    getAllCommentsForPost,
    updateComment,
    deleteComment


} from "./comment.repository.js";


export const CreateComment = async (req, res) => {
    try {
      const comment = await createComment(req.body);
      res.status(201).json(comment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  export const GetCommentById = async (req, res) => {
    try {
      const comment = await getCommentById(req.params.commentId);
      if (!comment) {
        return res.status(404).json({ message: 'Comment not found' });
      }
      res.json(comment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  export const GetAllCommentsForPost = async (req, res) => {
    try {
      const comments = await getAllCommentsForPost(req.params.postId);
      res.json(comments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  export const UpdateComment = async (req, res) => {
    try {
      const comment = await updateComment(req.params.commentId, req.body);
      if (!comment) {
        return res.status(404).json({ message: 'Comment not found' });
      }
      res.json(comment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  export const DeleteComment = async (req, res) => {
    try {
      const comment = await deleteComment(req.params.commentId);
      if (!comment) {
        return res.status(404).json({ message: 'Comment not found' });
      }
      res.status(204).send(); // No content
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }