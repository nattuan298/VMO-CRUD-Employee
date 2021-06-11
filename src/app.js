import express, { json, urlencoded } from 'express';
import employeeRoute from './routes/employee.route.js';
import sequelize from './database.js';
import Employee from './models/employee.model.js';

const app = express();
app.set('port', process.env.PORT);

app.use(json());
app.use(urlencoded({ extended: true }));

app.get('/', (req, res) => {

  res.send('hello from simple server :)')

})

app.use('/api/v1', employeeRoute);
// app.use(employeeRoute);

sequelize
  // .sync({ force: true })
  .sync()
  .then(result => {
    return Employee.findByPk(1);
  })
  .then(employee => {
    if (!employee) {
      return Employee.create({ username: 'NAT', password: '123', email: 'nat2gmail.com', phone: '09876543' });
    }
    return Promise.resolve(employee);
  })
  .then(employee => {
    console.log(employee);
  })
  .catch(err => console.log(err))

export default app;