const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const user = require('./routes/user');

//initilze express.js
const app = express();
//to receive json data
app.use(express.json());
//initilze cors 
app.use(cors({
    origin: '*'
}));

//connect mongobd
mongoose.connect('mongodb+srv://login:login@cluster0.xa0jcmi.mongodb.net/?retryWrites=true&w=majority').then(
    console.log("Db is connected")
);

//auth api's
app.use('/api/auth', auth);
//users api's
app.use('/api/user', user);

//run server
app.listen(5000, () => console.log('server is running'));