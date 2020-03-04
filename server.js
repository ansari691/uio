const express = require("express");
const mongoose = require("mongoose");
const connectDb = require('./db');


const app = express();
const PORT = 5001;


app.listen(PORT, console.log(`server is runnig at port ${PORT}`));

app.get("/", (req,res,next) => {
    res.json("home route"); 
    next();
});

app.use(express.json());
app.use('/api/internetServices', require('./routes/api/internetService'));
app.use('/api/softwareServices', require('./routes/api/softwareService'));
app.use('/api/careers', require('./routes/api/careers'));
app.use('/api/about', require('./routes/api/about'));
app.use('/api/contact', require('./routes/api/contact'));
app.use('/api/privacy', require('./routes/api/privacy'));
app.use('/api/terms', require('./routes/api/terms'));


connectDb;