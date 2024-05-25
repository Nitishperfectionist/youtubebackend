import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB=async()=>{
   try{
      const connectionDB = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      console.log(`\n database conneced !! DB HOST: ${connectionDB.connection.host}`);
   }catch(error){
    console.log(error);
    process.exit(1)
   }
}
export default connectDB;