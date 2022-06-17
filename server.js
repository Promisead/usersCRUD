const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan")
const bodyParser = require("body-parser")
const path = require("path")
const app = express();
dotenv.config({path : 'config.env'});
const router = require("./server/routes/router")
const connectDB = require("./server/database/connection")

const port = process.env.PORT||8080

//log request
app.use(morgan("tiny"))

//mongoDB connection
connectDB()

//parse request to body parser
app.use(bodyParser.urlencoded({extended : true}))

// Set view engine
app.set("view engine", "ejs")
// app.set("views", path.resolve(__dirname, "views/ejs"))
 
//Load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

//Load routers
app.use('/', router)


app.listen(port, () => {
  console.log(`app is running  on http://localhost:${port}`);
});
