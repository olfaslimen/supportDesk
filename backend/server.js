const express = require('express');
const dotenv = require('dotenv').config();
//import express from "express";

//plus tard** var-env
const app = express();

const PORT= process.env.PORT || 3000;

//create route with express
app.get('/',(req,res)=>{
    res.send('hello');
})

//Routes
app.use('/api/users', require("./routes/userRoutes"));
app.use('/login', require("./routes/userRoutes"));

app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));