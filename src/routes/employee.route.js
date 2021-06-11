import express from "express";
import { postAddEmployee, getAllEmployee, getEmployeeById, putUpdateEmployee, deleteEmployee } from "../controllers/employee.controller.js";

const router = express.Router();

//add employ
router.post('/employee/add', postAddEmployee);

//Get all employ
router.get('/employee', getAllEmployee)

//get by id
router.get('/employee/:id', getEmployeeById)

//Update by id
router.put('/employee/:id', putUpdateEmployee)

//Delete by id
router.delete('/employee/:id', deleteEmployee)

export default router;

