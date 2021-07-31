import express from 'express';
import { isAuth } from '../utils.js';
import {getOrder,postOrder,getOneOrder,putOrder} from './../controllers/orderController.js';




const orderRouter = express.Router();

orderRouter.get('/mine',isAuth,getOrder);

orderRouter.post('/',isAuth,postOrder);

orderRouter.get('/:id',isAuth,getOneOrder);

orderRouter.put('/:id/pay',isAuth,putOrder);

export default orderRouter;