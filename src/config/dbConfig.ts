import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGOURL!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB Connected Successfully");
    });

    connection.on("error", (err) => {
      console.log(
        "MongoDB connection error. Please make sure MongoDB is running. " + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Somethign goes wrong");
    console.log(error);
  }
}
