const express = require("express");
// const productdata = require ('./productData')
const mongoose = require('mongoose')
const routes = require("./routes")

require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000



const Schema = new mongoose.Schema({
    title: String,
    content: String
    },
    {
        collection: 'posts'
    });
  
  const Post = mongoose.model('Post', Schema);

app.use(express.json());

app.get('/posts', async (req, res) => {
      const posts = await Post.find();
  res.send(posts)
});
  
app.post("/posts", async (req, res) => {
    const post = new Post({
      title: req.body.title,
      content: req.body.content
    })
    await post.save()
    res.send(post)
  })
  
// app.get('/api/products', (req, res) => {
//     res.send(productdata.products);
// })

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