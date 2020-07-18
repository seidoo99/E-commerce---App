const express = require("express");
const mongoose = require('mongoose');


require('dotenv').config({ path: '/Users/yohannes/Desktop/DigitalCrafts/E-commerce-App/.env'});
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


app.get("/api/products/:id", async (req, res) => {
  const productData = await Products.findById(req.params.id);
  res.send(productData)

})

const uri = process.env.MONGODB_URL;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log('mongodb connection established successfully');
    
})

app.listen(port, ()=> {console.log(`server start running on port:  ${port}`)})