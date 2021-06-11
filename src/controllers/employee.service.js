import Employee from '../models/employee.model.js';


export const postAddEmployeeService = async (data) => {
  const response = {
    statusCode: 200,
    message: 'Create new employee successfull',
    data: {}
  }
  try {
    return response.data = Employee.create({
      username: data.username,
      password: data.password,
      email: data.email,
      phone: data.phone
    })
  } catch (error) {
    response.statusCode = 500;
    response.message = error.message;
  }
};

export const getAllEmployeesService = async () => {
  try {
    return await Employee.findAll()
  } catch (error) {
    console.log(error.message);
  }
};

export const getEmployeeByIdService = async (id) => {
  return await Employee.findByPk(id)
};

export const putUpdateEmployeeService = async (id, body) => {
  const response = {
    statusCode: 200,
    message: 'Update successfull',
    data: {}
  }

  try {
    const employee = await Employee.findByPk(id);
    if (employee.username == body.username || employee.password == body.password || employee.email == body.email ||
      employee.phone == body.phone) {
      return {
        statusCode: 400,
        message: 'Data trung roi update cc gi!!!',
        data: {}
      }
    }
    const updated = await Employee.update(body, { where: { id } })
    if (updated == 1) {
      response.data = await Employee.findByPk(id)
    }
    return response
  } catch (error) {
    response.error = 500
    response.message = error.message
  }
}

export const deleteEmployeeService = async (id) => {
  const employee = await Employee.findByPk(id)
  return await employee.destroy()
}

