import express from 'express';
import { isAuth } from '../utils.js';
import {getUsers,signIn,register,getOneUser,updateUser} from './../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/seed',getUsers);

userRouter.post('/signin',signIn);

userRouter.post('/register',register);

userRouter.get('/:id',getOneUser);

userRouter.put('/profile',isAuth,updateUser);

export default userRouter;