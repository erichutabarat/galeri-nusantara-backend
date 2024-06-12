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
    },
    async updateBudaya(req: Request, res: Response) {
        const { id } = req.params;
        const { token, title, source, description } = req.body;
        if (!token || !id || !title || !source || !description) {
            const response = responseMiddleWare("Failed", "Please input all requirements!");
            return res.status(400).json(response);
        }
    
        const ID = (typeof id === "number") ? id : parseInt(id);
        if (isNaN(ID)) {
            const response = responseMiddleWare("Failed", "Invalid ID format!");
            return res.status(400).json(response);
        }
    
        try {
            const data = await BudayaModels.updateBudaya(token, ID, title, source, description);
            if (!data) {
                const response = responseMiddleWare("Failed", "Something went wrong while updating Budaya!");
                return res.status(404).json(response);
            }
    
            const response = responseMiddleWare("Success", "Successfully updated Budaya", data);
            return res.status(200).json(response);
    
        } catch (error) {
            const response = responseMiddleWare("Error", "Internal Server Error", error.message);
            return res.status(500).json(response);
        }
    },    
    async deleteBudaya(req: Request, res: Response){
        const { token, id } = req.body;
        if(!token || !id){
            const response = responseMiddleWare("Failed", "Please input all requirementss!");
            return res.status(404).json(response);
        }
        const ID = (typeof id ==="number") ? id : parseInt(id);
        const data = await BudayaModels.deleteBudaya(token, ID);
        if(!data){
            const response = responseMiddleWare("Failed", "Something error while creating new Budaya!");
            return res.status(404).json(response);
        }
        const response = responseMiddleWare("Success", "Success delete Budaya", data);
        return res.status(200).json(response);
    }
};

export default BudayaController;