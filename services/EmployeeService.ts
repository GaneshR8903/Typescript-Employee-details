import { RepositoryModel, UserModel } from '../models/adminModel';

class EmployeeService {
    static async getAllUsers(): Promise<UserModel[]> {
        return await RepositoryModel.getAllUsers();
    }

    static async getUsersById(userId: number): Promise<UserModel | null> {
        return await RepositoryModel.getUserById(userId);
    }

    static async createUser(userData: Omit<UserModel, 'id'>): Promise<UserModel> {
        return await RepositoryModel.createUser(userData);
    }

    static async updateUser(userId: number, userData: Partial<UserModel>): Promise<UserModel | null> {
        return await RepositoryModel.updateUser(userId, userData);
    }

    static async deleteUser(userId: number): Promise<boolean> {
        return await RepositoryModel.deleteUser(userId);
    }

}

export default EmployeeService;
