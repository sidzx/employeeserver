const express=require('express')

const employeeController=require('../controller/employeecontroller')
const router =express.Router()
router.post('/reg',employeeController.register)
router.get('/list',employeeController.emplist)
router.delete('/del/:id',employeeController.delemp)
router.put('/edit/:uid',employeeController.editemp)
module.exports=router