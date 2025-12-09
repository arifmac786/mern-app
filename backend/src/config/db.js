import mongoose from "mongoose"
import { mongoUri } from "../config.js"

const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(mongoUri)
        console.log(`Mongo DB connection successful !! DB HOST : ${connectionInstance.connection.host}`);
        
        
    } catch (error) {
        console.log(`Mongo db connection ERROR : ${error?.message}`);
        process.exit(1)
        
    }
}

export default connectDB