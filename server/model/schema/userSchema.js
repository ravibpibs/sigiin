const { Mongoose } = require('mongoose');
const mongoose=require('../connection');
const userSchema=mongoose.Schema({
    email:{
        type:String,
        lowercase:true,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    }  
},{timestamps:true});
const userModel=mongoose.model('user',userSchema);
module.exports=userModel;