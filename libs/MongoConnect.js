/* eslint-disable no-console */
import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log("Mongo connection successful");
  } catch (err) {
    throw new Error("Error in connecting to mongo");
  }
};

export default connect;
