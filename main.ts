import express from 'express';
import sequelize from './config/db';
import employeeRoutes from './routes/adminRoutes';

const app = express();

app.use(express.json());
app.use('/employees', employeeRoutes);

sequelize.sync({ force: false })
    .then(() => {
        console.log('Database synced');
        const PORT = 3000;
        app.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}`));
    })
    .catch(error => console.error('Error syncing database:', error));
