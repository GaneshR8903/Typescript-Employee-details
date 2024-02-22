import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/db';

class UserModel extends Model {}

UserModel.init({
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dob: {
        type: DataTypes.DATE,
        allowNull: false
    },
    designation: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nationality: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'UserModel',
    timestamps: false
});

class RepositoryModel {
    static async getAllUsers(): Promise<UserModel[]> {
        return await UserModel.findAll();
    }

    static async getUserById(userId: number): Promise<UserModel | null> {
        return await UserModel.findByPk(userId);
    }

    static async createUser(userData: Omit<UserModel, 'id'>): Promise<UserModel> {
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


export { UserModel, RepositoryModel };
