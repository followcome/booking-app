
import express from "express";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import hotelRoute from "./routes/hotels.js";
import userRoute from "./routes/users.js"
import roomRoute from "./routes/rooms.js"
import cors from "cors"

import cookieParser from "cookie-parser";

import  dotenv,{config} from "dotenv";
dotenv.config()
const app = express();
const connect = async()=>{
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB")
  } catch (error) {
    throw(error);
  }
  
}
  //Middlewares
  app.use(cookieParser())
  app.use(express.json());
  app.use (cors());
  app.use("/api/auth",authRoute);
  app.use("/api/hotels",hotelRoute);
  app.use("/api/auth",authRoute);
  app.use("/api/users",userRoute);
  app.use("/api/rooms",roomRoute);



  app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
      success:false,
      staus:errorStatus,
      message:errorMessage,
      stack:err.stack,
    })
  });


  app.listen(6200, () => {
    connect();
    console.log("Connected to backend!");
  }); 