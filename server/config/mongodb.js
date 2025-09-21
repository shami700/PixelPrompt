import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => console.log("Database Connected"));
  await mongoose.connect(`mongodb+srv://Shami:shami%4012345@pixelprompt.54ej6a0.mongodb.net/?retryWrites=true&w=majority&appName=PixelPrompt`);
};

export default connectDB;