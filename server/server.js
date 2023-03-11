const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./db/conn");
const router = require("./routes/routes");

const app = express();
dotenv.config();
connectDB();

app.use(express.json());
app.use(cors());
app.use("" , router);

const port = process.env.PORT || 5000;
app.listen(port , ()=>{
    console.log(`app is listening on Port : ${port}`);
    console.log("https://github.com/techinfo-youtube/ecommerce-app-2023/tree/15-admin-orders-css");
})