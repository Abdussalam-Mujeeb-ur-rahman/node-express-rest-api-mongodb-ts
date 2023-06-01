import { Router } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

import { signup, login } from '../controllers/authController'; // import the auth controller

const router = Router(); // Create an instance of the Router

router.post('/auth/signup', signup);

router.post('/auth/login', login);

export default router;
