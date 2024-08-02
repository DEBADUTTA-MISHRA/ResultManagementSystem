const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8008;
const mainRouter = require('./routes/index');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./dbLayer/connection');


const app = express();
app.use(bodyParser.json());
app.use(cors());

connectDB();

app.get('/',(req, res)=>{
    res.send("Welcome to Result Management System");
});

app.use('/',mainRouter);

app.listen(PORT, ()=>{
    console.log(`Server Listen on http://localhost:${PORT}`);
})