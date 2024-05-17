import { Request, Response } from "express";
import BudayaModels from "../models/budaya-models";
import responseMiddleWare from "../middleware/response-middleware";

const BudayaController = {
    async getAll(req: Request, res: Response){
        const data = BudayaModels.getAll();
        if(!data){
            const response = responseMiddleWare("Failed", "Budaya still empty!", []);
            res.status(404).json(response);
        }
        const response = responseMiddleWare("Success", "Get budaya list success!", data);
        res.status(200).json(response);
    }
};

export default BudayaController;