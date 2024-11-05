const mongoose=require('mongoose')
const validators =require('validator')

const employeeSchema=new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:false,
        validate:[validators.isEmail,"Invalid Email"]
    }
})
const employees=mongoose.model("employees",employeeSchema)
module.exports=employees