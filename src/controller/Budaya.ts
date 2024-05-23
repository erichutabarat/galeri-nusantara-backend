import { Request, Response } from "express";
import BudayaModels from "../models/budaya-models";
import responseMiddleWare from "../middleware/response-middleware";

const BudayaController = {
    async getAll(req: Request, res: Response){
        const data = await BudayaModels.getAll();
        if(!data){
            const response = responseMiddleWare("Failed", "Budaya still empty!", []);
            return res.status(404).json(response);
        }
        const response = responseMiddleWare("Success", "Get budaya list success!", data);
        return res.status(200).json(response);
    },
    async getById(req: Request, res: Response){
        const { id } = req.params;
        if(!id){
            const response = responseMiddleWare("Failed", "Invalid id!");
            return res.status(404).json(response);
        }
        const budayaid = parseInt(id);
        const data = await BudayaModels.getById(budayaid);
        if(!data){
            const response = responseMiddleWare("Failed", "Budaya not found!");
            return res.status(404).json(response);
        }
        const response = responseMiddleWare("Success", "Success get budaya detail", data);
        return res.status(200).json(response);
    },
    async createBudaya(req: Request, res: Response){
        const { token, title, source, description } =  req.body;
        if(!token  || !title || !source || !description){
            const response = responseMiddleWare("Failed", "Please input all requirements!");
            return res.status(404).json(response);
        }
        const data = await BudayaModels.createBudaya(token, title, source, description);
        if(!data){
            const response = responseMiddleWare("Failed", "Something error while creating new Budaya!");
            return res.status(404).json(response);
        }
        const response = responseMiddleWare("Success", "Success create new Budaya", data);
        return res.status(200).json(response);
    }
};

export default BudayaController;