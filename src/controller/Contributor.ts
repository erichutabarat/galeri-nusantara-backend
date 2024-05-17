import { Request, Response } from "express";
import ContributorModels from "../models/contributor-models";
import responseMiddleWare from "../middleware/response-middleware";

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
        const response = responseMiddleWare("Success", "Success get contributor detail", data);
        return res.status(200).json(response);
    }
};

export default ContributorController;