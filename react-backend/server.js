const express = require("express");
const mongoose = require('mongoose')
const routes = require("./routes")

require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000



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
  

// app.get("/api/products/:id", (req, res) => {
//     const productId = req.params.id;
//     const product = productdata.products.find(p=>p.id === productId);
//     // if(product){
//     //     res.send(product)
//     // }
//     // res.status(404).send({message :'product not found'});
//     res.send(productdata.products.find(x=>x.id == productId ))

// })



const uri = process.env.ATLAS_URI;
mongoose.connect('mongodb+srv://tlXx04pN5TdI:tlXx04pN5TdI@cluster0.ulvxj.mongodb.net/ecommerce?retryWrites=true&w=majority', {useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log('mongodb connection established successfully');
    
})

app.listen(port, ()=> {console.log(`server start running on port:  ${port}`)})