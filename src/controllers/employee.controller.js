import { postAddEmployeeService, deleteEmployeeService, getAllEmployeesService, getEmployeeByIdService, putUpdateEmployeeService } from './employee.service.js';

const postAddEmployee = async (req, res) => {
  const data = await postAddEmployeeService(req.body);
  console.log(data);
  return res.status(200).json(data);

};

const getAllEmployee = async (req, res) => {
  const data = await getAllEmployeesService();
  res.status(200).json(data)
}

const getEmployeeById = async (req, res) => {
  const { id } = req.params
  const data = await getEmployeeByIdService(id)
  return res.status(200).json(data)
}

const putUpdateEmployee = async (req, res) => {
  const { id } = req.params
  const data = await putUpdateEmployeeService(id, req.body)
  return res.status(200).json(data);
}

const deleteEmployee = async (req, res) => {
  const { id } = req.params
  await deleteEmployeeService(id)
  return res.status(200).send('Delete success')
}
export { postAddEmployee, getAllEmployee, getEmployeeById, putUpdateEmployee, deleteEmployee }
