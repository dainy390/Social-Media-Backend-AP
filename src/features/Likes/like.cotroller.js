
import { customErrorHandler } from "../../middlewares/errorHandler.js";
import {
    createLike,
    deleteLike,
    getLikesByPostId,
    getLikesByCommentId,
    getLike

} from "./like.repository.js";


export const like = async (req, res) => {
    try {
      const like = await createLike(req.body);
      res.status(201).json(like);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  export const unlike = async (req, res) => {
    try {
      const result = await deleteLike(req.body);
      if (result.deletedCount === 0) {
          return res.status(404).json({message: "Like not found"});
      }
      res.status(204).send(); // No content
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  export const getLikesByPost = async (req, res) => {
    try {
      const likes = await getLikesByPostId(req.params.postId);
      res.json(likes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  export const getLikesByComment = async (req, res) => {
    try {
      const likes = await getLikesByCommentId(req.params.commentId);
      res.json(likes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  export const GetLike = async (req, res) => {
    try {
      const like = await getLike(req.body);
      if (!like) {
        return res.status(404).json({ message: 'Like not found' });
      }
      res.json(like);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }