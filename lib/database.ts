import mongoose, { ConnectOptions } from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) return;

  try {
    if (!process.env.MONGODB_URI) return;
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "the_many_saints",
      useNewUrlParser: true,
      useUnifiedTopology: true
    } as ConnectOptions);

    isConnected = true;
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};
