import express from 'express';
import * as authController from '../controllers/auth.controller.js';
import { validate } from '../utils/validation.js';
import { userRegisterValidate, userLoginValidate } from '../models/user.model.js';

const router = express.Router();

router.post('/register', validate(userRegisterValidate), authController.register);
router.post('/login', validate(userLoginValidate), authController.login);

export default router;
