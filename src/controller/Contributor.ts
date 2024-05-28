import { Request, Response } from "express";
import ContributorModels from "../models/contributor-models";
import responseMiddleWare from "../middleware/response-middleware";
import jwtAuth from "../auth/jwt-auth";

const ContributorController = {
    async getAll(req: Request, res: Response){
        const data = await ContributorModels.getContributor();
        if(!data){
            const response = responseMiddleWare("Failed", "Contributor List Empty!");
            return res.status(404).json(response);
        }
        const response = responseMiddleWare("Success", "Success get contributor list", data);
        res.status(200).json(response);
    },
    async getById(req: Request, res: Response){
        const { id } = req.params;
        if(!id){
            const response = responseMiddleWare("Failed", "Invalid id!");
            return res.status(404).json(response);
        }
        const userid = parseInt(id);
        const data = await ContributorModels.getContributorById(userid);
        if(!data){
            const response = responseMiddleWare("Failed", "Contributor not found!");
            return res.status(404).json(response);
        }
        const response = responseMiddleWare("Success", "Success get contributor detail ssss", data);
        return res.status(200).json(response);
    },
    async getLogin(req: Request, res: Response){
        const { username, password } = req.body;
        if(!username || !password){
            const response = responseMiddleWare("Failed", "Please input username and password!");
            return res.status(400).json(response);
        }
        const data = await ContributorModels.Login(username, password);
        if(data){
            const generateToken = jwtAuth.create(username);
            const response = responseMiddleWare("Success", "Success login!", generateToken);
            return res.status(200).json(response);
        }
        else{
            const response = responseMiddleWare("Failed", "Incorrect username or password!");
            return res.status(404).json(response);
        }
    },
    async getRegister(req: Request, res: Response){
        const { username, password, email} = req.body;
        if(!username || !password){
            const response = responseMiddleWare("Failed", "Please input username and password!");
            return res.status(400).json(response);
        }
        const emails = (email) ? email : null;
        const data = await ContributorModels.Register(username, password, email);
        if(!data){
            const response = responseMiddleWare("Failed", "Username or Email already taken!");
            return res.status(400).json(response);
        }
        const response = responseMiddleWare("Success", "Register success!", data);
        return res.status(200).json(response);
    },
    async getDetail(req: Request, res: Response){
        const { token } = req.body;
        if(!token){
            const response = responseMiddleWare("Failed", "Please input token!");
            return res.status(400).json(response);
        }
        const decode = jwtAuth.decode(token);
        if(!decode){
            const response = responseMiddleWare("Failed", "Invalid token!");
            return res.status(400).json(response);
        }
        const user = JSON.parse(decode).user;
        if(!user){
            const response = responseMiddleWare("Failed", "Invalid token!");
            return res.status(400).json(response);
        }
        const data = await ContributorModels.getContributorByUser(user);
        if(!data){
            const response = responseMiddleWare("Failed", "User not found!");
            return res.status(404).json(response);
        }
        const response = responseMiddleWare("Success", "Success get data", data);
        return res.status(200).json(response);
    },
    async getBudaya(req: Request, res: Response){
        const { token } = req.body;
        if(!token){
            const response = responseMiddleWare("Failed", "Please input token!");
            return res.status(400).json(response);
        }
        const decode = jwtAuth.decode(token);
        if(!decode){
            const response = responseMiddleWare("Failed", "Invalid token!");
            return res.status(400).json(response);
        }
        const data = await ContributorModels.Budaya(token);
        if(!data){
            const response = responseMiddleWare("Failed", "Empty data!");
            return res.status(400).json(response);
        }
        const response = responseMiddleWare("Success", "Success get data", data);
        return res.status(200).json(response);
    }
};

export default ContributorController;