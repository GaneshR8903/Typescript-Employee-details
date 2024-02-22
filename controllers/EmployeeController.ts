import { Request, Response } from "express";
import EmployeeService from "../services/EmployeeService";

class UserController {
  static async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await EmployeeService.getAllUsers();
      res.json(users);
    } catch (error : any) {
      console.error("Error getting all users:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async getUsersById(req: Request, res: Response): Promise<void> {
    const userId: number = Number(req.params.id);
    try {
      const user = await EmployeeService.getUsersById(userId);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error: any) {
      console.error("Error getting user by ID:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async createUser(req: Request, res: Response): Promise<void> {
    const userData = req.body;
    try {
      const newUser = await EmployeeService.createUser(userData);
      res.status(201).json(newUser);
    } catch (error : any) {
      res
        .status(400)
        .json({ message: "Failed to create user", error: error.message });
    }
  }

  static async updateUser(req: Request, res: Response): Promise<void> {
    const userId: number = Number(req.params.id);
    const userData = req.body;
    try {
      const updatedUser = await EmployeeService.updateUser(userId, userData);
      if (updatedUser) {
        res.json(updatedUser);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error : any) {
      res
        .status(400)
        .json({ message: "Failed to update user", error: error.message });
    }
  }

  static async deleteUser(req: Request, res: Response): Promise<void> {
    const userId: number = Number(req.params.id);

    try {
      const success = await EmployeeService.deleteUser(userId);

      if (success) {
        res.json({ message: "User deleted successfully" });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error : any) {
      console.error("Error deleting user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

export default UserController;
