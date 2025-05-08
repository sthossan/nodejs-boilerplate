import { User } from '../models/user.model.js';

export const getProfile = async (userId) => {
    return await User.findById(userId).select('name email bio avatarUrl isVerified -_id');
};

export const updateProfile = async (userId, updates) => {
    const updatedUser = await User.findByIdAndUpdate(
        userId,
        {
            name: updates.name,
            bio: updates.bio,
            avatarUrl: updates.avatarUrl,
            updatedDate: new Date(),
            $inc: { __v: 1 }
        },
        { new: true }
    );

    if (!updatedUser) {
        throw new Error('User not found');
    }
};

export default { getProfile, updateProfile };
