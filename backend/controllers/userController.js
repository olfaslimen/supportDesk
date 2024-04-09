
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')



//@desc   Register a new user
//@route  /api/users/
//@access Public
const registerUser =asyncHandler(async(req,res)=>{
    const {name, email, password}=req.body;

    //validation
    if(!name || !email || !password){
        res.status(400);
        throw new Error('Please include all fields')
    }

    //find if user already exist

    const userExists = await User.findOne({email});
    if (userExists){
        res.status(400);
        throw new Error('User already exist');
    }

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    //create user
    const user=await User.create({
        name,
        email,
        password:hashedPassword
    });


    if(user){
        res.status(201).json({ 
            _id: user._id,
            name: user.name,
            email:user.email,
            token: generateToken(user._id)
    })
       
    }else{
        res.status(400);
        throw new error('Invalid user data');
    }
})

//@desc   Login user
//@route  /api/users/login
//@access Public

const loginUser =asyncHandler(async(req,res)=>{

    const {email, password} = req.body;
    const user= await User.findOne({email})

    //check user and password match
    
     //ct= bcrypt.compare(password, user.password);
    ///res.send(ct);
    if(user && (await bcrypt.compare(password, user.password)))
    {
        //res.send(user);
        res.status(200).json({ 
            _id: user._id,
            name: user.name,
            email:user.email,
            token: generateToken(user._id)

    })
    }else{
        res.status(401)
        console.log(password)
        throw new Error('invalid email or password');
    }
    res.send('Login Route');
})
const generateToken = (id)=> {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '60d',
    })
}
module.exports ={
    registerUser,
    loginUser
}