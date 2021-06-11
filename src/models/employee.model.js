import Sequelize from 'sequelize';

import sequelize from '../database.js';

const Employee = sequelize.define('employee', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: Sequelize.STRING,
  phone: Sequelize.STRING
});

export default Employee;