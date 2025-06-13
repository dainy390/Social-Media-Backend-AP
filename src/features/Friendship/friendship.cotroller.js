import { customErrorHandler } from "../../middlewares/errorHandler.js";
import {createFriendship,
    updateFriendship,getFriendshipRequests,getFriendships, 
    deleteFriend} from "./friendship.repository.js";

export const sendFriendRequest = async (req, res) => {
    try {
      const friendship = await createFriendship(req.body);
      res.status(201).json(friendship);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  export const acceptFriendRequest = async (req, res) => {
    try {
      const friendship = await updateFriendship(
        { _id: req.body.friendshipId },
        { status: 'accepted' }
      );
      if (!friendship) {
        return res.status(404).json({ message: 'Friend request not found' });
      }
      res.json(friendship);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  export const rejectFriendRequest = async (req, res) => {
    try {
      const friendship = await updateFriendship(
        { _id: req.body.friendshipId },
        { status: 'rejected' }
      );
      if (!friendship) {
        return res.status(404).json({ message: 'Friend request not found' });
      }
      res.json(friendship);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  export const getFriendRequests = async (req, res) => {
    try {
      const requests = await getFriendshipRequests(req.params.userId);
      res.json(requests);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  export const GetFriendships = async (req, res) => {
    try {
      const friendships = await getFriendships(req.params.userId);
      res.json(friendships);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
export const DeleteFriend = async (req, res) => {
    try {
      const DeletedFriend = await deleteFriend(req.params.friendId);
      if (!DeletedFriend) {
        return res.status(404).json({ message: 'Friend not found' });
      }
      res.status(204).send("Friend Deleted Successfully!!"); 
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
