require('dotenv').config()

const express=require('express')
const cors=require('cors')
const server=express()

server.use(express.json())

server.use(cors())

require('./connection.js/connection')
const route=require('./Routes/routes')

server.use(route)

const PORT =process.env.PORT || 5000

server.listen(PORT,()=>{
    console.log('server running succesfully at PORT:',PORT)
})
server.get('/',(req,res)=>{
    res.send("Server is running live....")
})