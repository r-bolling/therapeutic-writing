const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()
const path = require('path');
const mongoose = require("mongoose")
const port = process.env.PORT || 5000
const CURRENT_SERVER_DIRECTORY = path.resolve(path.dirname('.'));
const STATIC_DIRECTORY = path.resolve(CURRENT_SERVER_DIRECTORY, 'backend', 'public')


app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)
app.use(express.static(STATIC_DIRECTORY));


// const mongoURI = "mongodb://localhost:27017/capstone"
const mongoURI = precess.env.MONGODB.URL;

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err))

const Users = require("./routes/Users")

app.use("/users", Users)

app.listen(port, () => {
  console.log("Server is running on port: " + port)
})
