import { Request, Response } from "express";
import AdminModels from "../models/admin-models";
import jwtAuth from "../auth/jwt-auth";
import responseMiddleWare from "../middleware/response-middleware";

const AdminController = {
    async adminLogin(req: Request, res: Response){
        const { username, password } = req.body;
        if(!username || !password){
            const response = responseMiddleWare("failed", "Please input username and passowrd!");
            return res.status(400).json(response);
        }
        const login = await AdminModels.Login(username, password);
        if(login){
            const generateToken = jwtAuth.create(username);
            const response = responseMiddleWare("Success", "Login success!", generateToken);
            return res.status(200).json(response);
        }
        else{
            const response = responseMiddleWare("failed", "Incorrect username or password!");
            return res.status(404).json(response);
        }
    },
    async adminDetail(req: Request, res: Response){
        const { token } = req.body;
        if(!token){
            const response = responseMiddleWare("failed", "Please input token!");
            return res.status(400).json(response);
        }
        const detail = jwtAuth.decode(token);
        if(!detail){
            const response = responseMiddleWare("failed", "Invalid token!");
            return res.status(400).json(response);
        }
        const user = JSON.parse(detail).user;
        if(!user){
            const response = responseMiddleWare("failed", "Invalid token!");
            return res.status(404).json(response);
        }
        const data = await AdminModels.getDetailByUser(user);
        if(!data){
            const response = responseMiddleWare("failed", "User not found!");
            return res.status(404).json(response);
        }
        const response = responseMiddleWare("Success", "Success get data", data);
        return res.status(200).json(response);
    }
};

export default AdminController;