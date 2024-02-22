import express from 'express';
import EmployeeController from '../controllers/EmployeeController';

const router = express.Router();

router.get('/users', EmployeeController.getAllUsers);
router.get('/users/:id', EmployeeController.getUsersById);
router.post('/users', EmployeeController.createUser);
router.put('/users/:id', EmployeeController.updateUser);
router.delete('/users/:id', EmployeeController.deleteUser);

export default router;
