import mongoose from 'mongoose';
import { customErrorHandler } from "../../middlewares/errorHandler.js";
import {friendshipSchema} from './friendship.schema.js';
const FriendshipModel = mongoose.model("Friendship", friendshipSchema);

export const  createFriendship = async (friendshipData) => {
    try {
      const friendship = await FriendshipModel.create(friendshipData);
      return friendship;
    } catch (error) {
      throw error;
    }
  }

  export const getFriendship = async (query) => {
    try {
      const friendship = await FriendshipModel.findOne(query);
      return friendship;
    } catch (error) {
      throw error;
    }
  }

  export const updateFriendship = async (query, updateData) => {
    try {
      const friendship = await FriendshipModel.findOneAndUpdate(query, updateData, { new: true });
      return friendship;
    } catch (error) {
      throw error;
    }
  }

  export const getFriendshipRequests = async (userId) => {
    try {
      const requests = await FriendshipModel.find({ recipient: userId, status: 'pending' }).populate('requester');
      return requests;
    } catch (error) {
      throw error;
    }
  }

  export const getFriendships = async (userId) => {
    try {
      const friendships = await FriendshipModel.find({
        $or: [
          { requester: userId, status: 'accepted' },
          { recipient: userId, status: 'accepted' },
        ],
      }).populate('requester recipient', 'username');
      return friendships;
    } catch (error) {
      throw error;
    }

  }
  export const deleteFriend = async (friendId) => {
      try {
        const deletedFriend = await FriendshipModel.findByIdAndDelete(friendId);
        return deletedFriend;
      } catch (error) {
        throw error;
      }
    }