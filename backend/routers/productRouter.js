import express from 'express';
import {getProductDetails,createProduct,getProduct} from '../controllers/prodController.js';


const productRouter = express.Router();

productRouter.get('/',getProduct);

productRouter.get('/seed',createProduct);

productRouter.get('/:id',getProductDetails);

export default productRouter;