import mongoose from 'mongoose';
import Joi from 'joi';
import { ROLES } from '../utils/constants.js';

const userSchema = new mongoose.Schema({
    // userId: { type: String, default: () => new mongoose.Types.ObjectId().toString(), unique: true },
    email: { type: String, unique: true, required: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    name: String,
    bio: String,
    avatarUrl: String,
    isActive: { type: Boolean, default: true },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, allowNull: true, default: null },
    lastLogin: { type: Date, allowNull: true },
    isVerified: { type: Boolean, default: false },
    role: { type: String, enum: Object.values(ROLES), default: ROLES.USER }
});

export const User = mongoose.model('User', userSchema);

export const userRegisterValidate = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(10).required(),
    name: Joi.string().min(6).max(20).required(),
    type: Joi.string().valid(1, 2, 3, 4).required() // 1: Super Admin, 2: Admin, 3: User, 4: Guest
}).options({ allowUnknown: true });

export const userLoginValidate = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(10).required()
})