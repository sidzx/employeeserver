const employees=require('../model/employeeSchema')

exports.register=async(req,res)=>{
    console.log('inside the register function')
    const {id,name, gender,salary,email}=req.body
    console.log(`id:${id}`,`name:${name}`,`gender:${gender}`,`salary:${salary}`,`email:${email}`)
    try{
        const existingEmployee= await employees.findOne({email})
        if (existingEmployee){
            res.status(406).json("Existing employee")
        }
        else{
            const newEmployee= await employees({id,name,gender,salary,email})
            await newEmployee.save()
            res.status(200).json("registered successfully")
        }
    }
    catch(err){
        res.status(400).json("something went wrong.." +err)
    }
}
exports.emplist=async(req,res)=>{
    console.log("inside list function")
    try{
        const result= await employees.find()
        console.log(result)
        res.status(200).json(result)
    }
    catch(err){
        res.status(401).json(err)
    }
}
exports.delemp=async(req,res)=>{
    console.log("inside the delete function")
    const {id}= req.params
    try{
        const result=await employees.findByIdAndDelete({_id:id})
        console.log(result)
        res.status(200).json(result)
        
    }
    catch(err){
        res.status(400).json("something went wrong"+err)
    }
}
exports.editemp=async(req,res)=>{
    console.log("inside edit function")
    const {uid}=req.params
    const {id,name,salary,email}=req.body
    
    try{
    const result=await employees.updateOne({_id:uid},{id,name,salary,email})
    console.log(result)
    res.status(200).json(result)
}
catch(err){
    res.status(400).json("something went wrong"+ err)
}
}

