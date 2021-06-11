import Sequenlize from 'sequelize';
import 'dotenv/config'

const sequelize = new Sequenlize('employee-node', 'root', 'root', {
  dialect: process.env.DIALECT,
  host: process.env.HOST
})

export default sequelize;