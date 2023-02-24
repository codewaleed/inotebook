const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
<<<<<<< HEAD
=======

>>>>>>> 4bff648f990d629e03b4bfc72ae60c37089e4f6d
connectToMongo();

const app = express();
app.use(cors());

const port = 5000;
app.use(cors());

app.use(express.json());
//available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
