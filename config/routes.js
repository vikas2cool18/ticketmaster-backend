const express=require('express')
const router=express.Router()

const customersController=require('../app/controllers/customersController')
const departmentsController=require('../app/controllers/departmentsController')
const employeesController=require('../app/controllers/employeesController')
const ticketsController=require('../app/controllers/ticketsController')
const usersController=require('../app/controllers/usersController')

router.get('/customers', customersController.list)
router.get('/customers/:id', customersController.show)
router.post('/customers', customersController.create)
router.put('/customers/:id', customersController.update)
router.delete('/customers/:id', customersController.destroy)

router.get('/departments', departmentsController.list)
router.get('/departments/:id', departmentsController.show)
router.post('/departments', departmentsController.create)
router.put('/departments/:id', departmentsController.update)
router.delete('/departments/:id', departmentsController.destroy)

router.get('/employees', employeesController.list)
router.get('/employees/:id', employeesController.show)
router.post('/employees', employeesController.create)
router.put('/employees/:id', employeesController.update)
router.delete('/employees/:id', employeesController.destroy)

router.get('/tickets', ticketsController.list)
router.get('/tickets/:id', ticketsController.show)
router.post('/tickets', ticketsController.create)
router.put('/tickets/:id', ticketsController.update)
router.delete('/tickets/:id', ticketsController.destroy)

router.get('/users', usersController.list)
router.get('/users/:id', usersController.show)
router.post('/users', usersController.create)
router.put('/users/:id', usersController.update)
router.delete('/users/:id', usersController.destroy)

module.exports=router