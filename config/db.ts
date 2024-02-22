import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('employee', 'root', '08092003', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize;