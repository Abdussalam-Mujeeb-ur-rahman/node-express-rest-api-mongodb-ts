import express, {Router} from 'express';

import { deleteUser, getAllUsers, updateUser } from '../controllers/users';
import { isAuthenticated, isOwner } from '../middlewares'

const router = Router();

router.get('/getAllUsers', isAuthenticated,  getAllUsers);
router.delete('/deleteUser/:id', isAuthenticated, isOwner, deleteUser);
router.patch('/updateUser/:id', isAuthenticated, isOwner, updateUser);

export default router;