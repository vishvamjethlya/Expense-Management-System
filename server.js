const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const path = require("path");
const connectDb = require("./config/connectDb");
// config dot env file
dotenv.config();

//databse call
connectDb();

//rest object
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//static files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//routes
//user routes
app.use("/api/v1/users", require("./routes/userRoute"));

//transaction routes
app.use("/api/v1/transaction", require("./routes/transactionRoute"));

//port
const PORT = 8080 || process.env.PORT;

//listen server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});