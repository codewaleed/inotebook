const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://wali2:wali2@cluster0.boucay5.mongodb.net/inotebook";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("connected mongodb");
  });
};

module.exports = connectToMongo;
