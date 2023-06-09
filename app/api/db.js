// this file is to connect my backend to the database
const mongoose = require('mongoose');
require('dotenv/config')
const databaseUri = process.env.databaseUri

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(databaseUri, {
      dbName: "StudentDetails",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = true;

    console.log('MongoDB connected')
  } catch (error) {
    console.log(error);
  }
}
// module.exports = connectToMongo
