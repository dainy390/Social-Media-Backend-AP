import { customErrorHandler } from "../../middlewares/errorHandler.js";
import {
  createPost,
  getPostById,
  getAllPosts,
  updatePost,
  deletePost

} from "./post.repository.js";
export const CreatePost = async (req, res) => {
  try {
    const post = await createPost(req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const GetPostById = async (req, res) => {
  try {
    const post = await getPostById(req.params.postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const GetAllPosts = async (req, res) => {
    try{
        const posts = await getAllPosts();
        res.json(posts);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export const UpdatePost = async (req, res) => {
    try{
        const post = await updatePost(req.params.postId, req.body);
        if(!post){
            return res.status(404).json({message: "Post not found"});
        }
        res.json(post);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export const DeletePost = async (req, res) => {
    try {
        const post = await deletePost(req.params.postId);
        if(!post){
            return res.status(404).json({message: "Post not found"});
        }
        res.status(204).send(); //No content.
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

