const express = require('express');
const app = express();
const http = require("http").Server(app);

const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://chandgudemonika10:chandgudemonika10@test-data.iyaap8i.mongodb.net/?retryWrites=true&w=majority&appName=test-data");

const uri =
  "mongodb+srv://chandgudemonika10:chandgudemonika10@test-data.iyaap8i.mongodb.net/?retryWrites=true&w=majority&appName=test-data";

mongoose
  .connect(uri)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use(express.json())

const User = require('./Models/userModel');


app.get('/',(req, res)=>{
    res.send("Hello World!")
})



//my routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/movies', require('./routes/movies'))
app.use('/api/seatbook', require('./routes/seatbook'))


http.listen(3000, function () {
  console.log(`Example app listening at http://localhost:3000`);
});
