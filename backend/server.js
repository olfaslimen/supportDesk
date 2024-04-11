const express = require('express');
const colors = require('colors');
const { format } = require('path');
const dotenv = require('dotenv');
dotenv.config({path: 'backend/.env'});
//const dotenv = require('dotenv').config();
const {errorHandler} = require ('./middleware/errorMiddleware')
const connectDB = require('./config/db')
//const PORT= process.env.PORT || 8080;
const PORT= 8000;


//connect to db
connectDB();

//plus tard** var-env
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: false}))

//create route with express
app.get('/',(req,res)=>{
    res.send('hello cv');
})

//Routes
app.use('/api/users', require("./routes/userRoutes"));
app.use('/login', require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));