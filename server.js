import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';//for sec info 
import productRouter from './backend/routers/productRouter.js';
import userRouter from './backend/routers/userRouter.js';
import orderRouter from './backend/routers/orderRouter.js';
// import path from 'path';


dotenv.config();
// __dirname = path.resolve;
const app = express();
app.use(express.json());//midleware that parse body of post req so u can use it 
app.use(express.urlencoded({ extended: true }));//midleware to attach body of post req to req.body 

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazona', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
// mongoose.connect(process.env.MONGODB_URL || 'mongodb+srv://Eman_classy:test1234@cluster0.3pqa5.mongodb.net/classyDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// });


if(process.env.Node_ENV === "production"){

  app.use(express.static("frontend/build"));
  app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'frontend','build','index.html'));
  });
  
}


  app.get('/', (req, res) => {
    res.send('Server is running');
  });

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});
// app.get('/', (req, res) => {
//   res.send('Server is ready');
// });

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});