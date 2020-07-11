const express = require('express')


require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000
// app.get("/products" , (res, req)=> {
//     res.send();
// })

app.use(express.json());


app.listen(port, ()=> {console.log(`server start running on port:  ${port}`)})