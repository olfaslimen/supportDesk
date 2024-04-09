const express = require('express');
const { format } = require('path');
const dotenv = require('dotenv').config();
const PORT= process.env.PORT || 3000;
const {errorHandler} = require ('./middleware/errorMiddleware')

//plus tard** var-env
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: false}))

//create route with express
app.get('/',(req,res)=>{
    res.send('hello');
})

//Routes
app.use('/api/users', require("./routes/userRoutes"));
app.use('/login', require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));