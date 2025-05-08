import bcrypt from 'bcrypt';
import { User } from '../models/user.model.js';
import * as jwtHandler from '../utils/jwtHandler.js';
import { ROLES } from '../utils/constants.js';
import { HTTP_STATUS, MESSAGES } from '../utils/constants.js';

export const register = async ({ email, password, name, type }) => {
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) throw new Error(MESSAGES.USER_ALREADY_EXISTS);

        const hashed = await bcrypt.hash(password, 10);
        const user = await User.create({
            email,
            password: hashed,
            name,
            bio: 'This is a default bio',
            avatarUrl: 'https://example.com/default-avatar.png',
            isactive: true,
            lastLogin: new Date(),
            isVerified: false,
            role: type === 1 ? ROLES.SUPER_ADMIN : type === 2 ? ROLES.ADMIN : type === 3 ? ROLES.USER : ROLES.GUEST
        });

        const token = jwtHandler.generateToken({ userId: user._id.toString(), role: user.role });
        const { password: _, ...userData } = user.toJSON();
        return { userData, token };
    } catch (err) {
        if (err.code === 11000) {
            throw new Error(MESSAGES.USER_ALREADY_EXISTS);
        }
        throw err;
    }
};

export const login = async ({ email, password }) => {
    try {
        const user = await User.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new Error(MESSAGES.INVALID_CREDENTIALS);
        }

        await User.updateOne(
            { _id: user._id },
            { $set: { lastLogin: new Date() } },
            { new: true }
        );
        // const user = await User.findByPk(user._id.toString(), { attributes: { exclude: ['password'] } });

        const { password: _, ...userData } = user.toJSON();
        const token = jwtHandler.generateToken({ userId: user._id.toString(), role: user.role });
        return { userData, token };
    }
    catch (err) {
        throw err;
    }
};
export default { register, login };