const express = require('express');
const app=express();
const errorMiddleWare=require('./middleWare/error')
app.use(express.json())

//routes import
 const product = require('./routes/productroutes');
 app.use("/api/v1",product);
//ADD MIDDLEWARE
app.use(errorMiddleWare)
module.exports = app;