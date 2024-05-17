import { Request, Response } from "express";
import AdminModels from "../models/admin-models";
import jwtAuth from "../auth/jwt-auth";

const AdminController = {
    async adminLogin(req: Request, res: Response){
        const { username, password } = req.body;
        if(!username || !password){
            return res.status(400).json({
                status: "failed",
                message: "Please input username and password"
            });
        }
        const login = await AdminModels.Login(username, password);
        if(login){
            const generateToken = jwtAuth.create(username);
            return res.status(200).json({
                status: "Success",
                message: "Login success",
                token: generateToken
            });
        }
        else{
            return res.status(400).json({
                status: "failed",
                message: "Incorrect username or password"
            });
        }
    }
};

export default AdminController;