const express = require("express");
const mongoose = require('mongoose');
const userRoute = require('./routes/users');
const config = require('./config');
const app = express();

// const port = process.env.PORT || 5000
const path = require('path');


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

// const uri = process.env.MONGODB_URL;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log('mongodb connection established successfully');
    
}).catch(error => {console.log(error)});

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('Client/build'));

  app.use('*', (req, res)=> {
   res.sendFile(path.resolve(__dirname, 'Client', 'build', 'index.html'));
  })
}


app.listen(config.PORT, ()=> {console.log('server start running on port')})