import { UserModel } from '../models/adminModel';

class UserRepository {
    static async getAllUsers(): Promise<UserModel[]> {
        return await UserModel.findAll();
    }

    static async getUserById(userId: number): Promise<UserModel | null> {
        return await UserModel.findByPk(userId);
    }

    static async createUser(userData: Partial<UserModel>): Promise<UserModel> {
        return await UserModel.create(userData);
    }

    static async updateUser(userId: number, userData: Partial<UserModel>): Promise<UserModel | null> {
        const user = await UserModel.findByPk(userId);
        if (user) {
            await user.update(userData);
            return user;
        }
        return null;
    }

    static async deleteUser(userId: number): Promise<boolean> {
        const user = await UserModel.findByPk(userId);
        if (user) {
            await user.destroy();
            console.log('Deleted Successfully');
            return true;
        }
        return false;
    }
}

export { UserRepository };
