import mongoose from "mongoose";
import * as dotenv from 'dotenv' 
dotenv.config()

const Connection = async (db_link) => {
  //promise based //
  //we could also have used try and catch //
  //NewUrlParser not used in mongo connect
  await mongoose
    .connect(db_link)
    .then((db) => {
    //   console.log(db);
      console.log("db Connected");
    })
    .catch((err) => {
      console.log("error to connect db : ", err);
    });
};

export default Connection;
