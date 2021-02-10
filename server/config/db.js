import mongoose from "mongoose";
const MONGO_URI =
  "mongodb+srv://AhmedMostafa:Ahmed1234@cluster0.jwl0u.mongodb.net/masterlinux?retryWrites=true&w=majority";
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    mongoose.set("useFindAndModify", false);
    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.error("MongoDB connection FAIL");
    process.exit(1);
  }
};

export default connectDB;
