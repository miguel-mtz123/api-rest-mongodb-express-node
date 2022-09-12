const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require("./routes/user");

const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(express.json());
app.use('/api',userRoutes);


// routes
app.get ("/", (req, res) => {
    res.send("Welcome to my API");
});

// mongodb connection
mongoose
  .connect ('mongodb://localhost:27017/myFirstDB')
  .then ( () => console.log (" Connected to MongoDB Atlas " ))
  .catch ((error) => console.error (error));

//mongoose.connect('mongodb://localhost:27017/test');

app.listen(port,() => console.log ('server listening on port', port));
