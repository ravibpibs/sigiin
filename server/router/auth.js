const express=require('express');
const router=express.Router();
const bcrypt=require('bcrypt');
const userModel=require('../model/schema/userSchema');

router.post('/register',async(req,res)=>{
    try
    {
        const {email,password}=req.body;
        console.log(req.body);
        if( !email || !password){
            return res.status(400).json({error:"Please Enter all Details"});
        }
        const encryptPassword=bcrypt.hashSync(password,10);
const userdata= new userModel({
    email,password:encryptPassword
})
const user =await userdata.save();
res.status(201).json({message:"Registered Successfully"});
console.log(user);
    }catch(err){
        console.log(`error ocurred ${err}`);
    }
})


router.post('/login',async(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
     return  res.status(400).json({error:"Please Enter all field"});
    }
    try{
        const user= await userModel.findOne({email:email})
        if(!user){
            res.status(400).json({error:"user with this email is not registered"})
        }
        else{
            const isMatched= bcrypt.compare(password,user.password);
            //console.log(user.password);
            //console.log(password);
            if(!isMatched){
                res.status(400).json({error:"Invalid Credentials"})
            }
            else{
                res.status(201).json({message:"Login Successfully"})
            }
        }
    }catch(err){
        console.log(`Something went wrong ${err}`)
    }
    
})

module.exports=router;