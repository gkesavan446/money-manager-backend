const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./config/connectDb");
// config dot env file
dotenv.config();

//database call
connectDb();

//rest object
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes
app.use("/api/v1/users", require("./routes/userRoute"));
app.use("/api/v1/transactions", require("./routes/transactionRoutes"));

//port
const PORT = 4000 || process.env.PORT;
//Home
app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩, Hello, Welcome to the Money Manager Server");
});

//listen server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
