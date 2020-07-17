const express = require("express");
const mongoose = require('mongoose')

require('dotenv').config({ path: 'C:/Users/abdel/OneDrive/Desktop/E-commerce-App/.env' });
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

app.get('/api/products', async (req, res) => {
      const productData = await Products.find();
  res.send(productData)
});


app.get("/api/products/:id", async (req, res) => {
  const productData = await Products.find( { _id: '5f0e3c967f6b4d09c7e27555'} )
  res.send(productData)

})



const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log('mongodb connection established successfully');
    
})

app.listen(config.port, ()=> {console.log(`server start running on port:  ${port}`)})