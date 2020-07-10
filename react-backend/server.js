import express from 'express';
// import data from './data'
const app = express();

app.get("api/products" , (res, req)=> {
    res.send(data.products);
})


app.listen(5000, ()=> {console.log("server start at localhost")})