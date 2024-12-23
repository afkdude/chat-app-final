import express from 'express'; 
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import userRoute from './Routes/user.route.js'; 
import cors from 'cors';
const app = express(); 
dotenv.config();
app.use(express.json());
app.use(cors());//enable cors for all routes


const port = process.env.PORT || 3000; // Default to 3000 if PORT is undefined
const URI = process.env.MONGODB_URI; 


try {
  mongoose.connect(URI);
  console.log("Connected to MongoDb");
} catch (error) {;
  console.log(error);
}


app.use('/user',userRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})