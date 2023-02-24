const mongoose = require("mongoose");
const mongoURI =
  //"mongodb+srv://wali2:wali2@cluster0.boucay5.mongodb.net/inotebook";
  "mongodb://wali2:wali2@ac-xhaqp3d-shard-00-00.boucay5.mongodb.net:27017,ac-xhaqp3d-shard-00-01.boucay5.mongodb.net:27017,ac-xhaqp3d-shard-00-02.boucay5.mongodb.net:27017/?ssl=true&replicaSet=atlas-11thvo-shard-0&authSource=admin&retryWrites=true&w=majority";
const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("connected mongodb");
  });
};

module.exports = connectToMongo;
