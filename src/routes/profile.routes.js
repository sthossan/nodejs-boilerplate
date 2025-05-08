import express from 'express';
import * as profileController from '../controllers/profile.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';
import { checkRole } from '../middlewares/check.role.middleware.js';
import { ROLES } from '../utils/constants.js';

const router = express.Router();

router.use(authMiddleware); // Apply auth middleware to all routes in this router
router.get('/getprofile', checkRole(ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.USER), profileController.getProfile);
router.put('/updateprofile', checkRole(ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.USER), profileController.updateProfile);

export default router;
