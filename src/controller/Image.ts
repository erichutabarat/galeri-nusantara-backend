import { Request, Response } from "express";
import responseMiddleWare from "../middleware/response-middleware";
import imageModels from "../models/image-models"

const ImageController = {
    async getAll(req: Request, res: Response){
        const data = await imageModels.getAll();
        const response = responseMiddleWare("Success", "Success get data!", data);
        return res.status(200).json(response);
    },
    async getById(req: Request, res: Response){
        const { id } = req.params;
        if(!id){
            const response = responseMiddleWare("Failed", "Please input id image!");
            return res.status(400).json(response);
        };
        const newId = (typeof id !=="number") ? parseInt(id) : parseInt(id);
        const data = await imageModels.getImageById(newId);
        const response = responseMiddleWare("Success", "Success get data!", data);
        return res.status(200).json(response);
    },
    async getByBudayaId(req: Request, res: Response){
        const { id } = req.params;
        if(!id){
            const response = responseMiddleWare("Failed", "Please input id budaya!");
            return res.status(400).json(response);
        };
        const newId = (typeof id !=="number") ? parseInt(id) : parseInt(id);
        const data = await imageModels.getImageByBudayaId(newId);
        const response = responseMiddleWare("Success", "Success get data!", data);
        return res.status(200).json(response);
    }
};

export default ImageController;