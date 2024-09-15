import mongoose from "mongoose";


const connectDB = async () => {
    try {
       await mongoose.connect('mongodb+srv://godarziamin:22407603@cluster0.rtzdt.mongodb.net/food-del');
       console.log("DB Connected");
    } catch (error) {
       console.error("Error connecting to DB:", error);
    }
 };


export {connectDB}