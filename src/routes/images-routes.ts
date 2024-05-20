import { Request, Response, Router } from "express";
import ImageController from "../controller/Image";
import UploadMiddleWare from "../middleware/upload-middleware";
import Uploader from "../utils/uploader";
import imageModels from "../models/image-models";
import fs from "fs";
import { error } from "console";

const ImagesRoutes = Router();

ImagesRoutes.get('/', ImageController.getAll);
ImagesRoutes.get('/:id', ImageController.getById);
ImagesRoutes.get('/budaya/:id', ImageController.getByBudayaId);

ImagesRoutes.post('/upload', UploadMiddleWare.single("images"), async (req: Request, res: Response) => {
    if(req.file){
        const { budayaid } = req.body;
        if(!budayaid){
            return res.json({
                message: 'Please input budaya id!'
            });
        }
        const budayaId = parseInt(budayaid);
        const paths = req.file.path;
        const uploading = await Uploader(paths);
        const creating = await imageModels.createImage(uploading, budayaId);
        fs.unlink(paths, (error) => {
            if(error){
                console.error(error);
            }
        });
        if(creating){
            return res.json({
                message: 'upload success',
                location: uploading
            });
        }
        else{
            return res.json({
                message: 'upload failed'
            });
        }
    }
    else{
        return res.json({
            message: 'upload failed'
        });
    }
});

export default ImagesRoutes;