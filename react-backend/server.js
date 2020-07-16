const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')
// require('dotenv').config();
const config = require( './config');
const app = express()
const port = process.env.PORT || 5000


app.use(express.json());
app.use(cors())
// const uri = process.env.ATLAS_URI;
const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then (()=> console.log('MongoDB connected ...'))
.catch(err => console.log(err));
// const connection = mongoose.connection;
// connection.once('open', ()=> {
//     console.log('mongodb connection established successfully');
// })

var Users = require('./routes/users')
app.use('/', Users)

app.listen(config.port, ()=> {console.log(`server start running on port:  ${port}`)})