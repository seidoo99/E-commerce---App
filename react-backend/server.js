const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000
// app.get("/products" , (res, req)=> {
//     res.send();
// })

app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log('mongodb connection established successfully');
})

app.listen(port, ()=> {console.log(`server start running on port:  ${port}`)})