const express = require("express");
const mongoose = require('mongoose');
const userRoute = require('./routes/users');
const config = require('./config');
const app = express();
const port = process.env.PORT || 50011


const Schema = new mongoose.Schema({
    picture: String,
    brand: String,
    type: String,
    price: Number,
    qut: Number,
    description: String,
    count: Number
    },
    {
        collection: 'products'
    });
  
  const Products = mongoose.model('Products', Schema);

app.use(express.json());

app.get('/api/products', async (req, res) => {
      const productData = await Products.find();
  res.send(productData)
});

app.use('/api/users', userRoute);

app.get("/api/products/:id", async (req, res) => {
  const productData = await Products.findById(req.params.id);
  res.send(productData)

})


const uri = config.MONGODB_URL;

<<<<<<< HEAD
// const uri = process.env.MONGODB_URL;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
=======

const uri = process.env.MONGODB_URL;
mongoose.connect('mongodb+srv://tlXx04pN5TdI:tlXx04pN5TdI@cluster0.ulvxj.mongodb.net/ecommerce?retryWrites=true&w=majority', {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
>>>>>>> 6174348ad483bdf6b329a4dfc0c6d4e17d5e3f22

const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log('mongodb connection established successfully');
    
}).catch(error => {console.log(error)});

app.listen(config.PORT, ()=> {console.log('server start running on port')})