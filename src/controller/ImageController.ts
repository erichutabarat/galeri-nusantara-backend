import { Request, Response } from "express";
import responseMiddleWare from "../middleware/response-middleware";
import imageModels from "../models/image-models"
import Uploader from "../utils/uploader";
import fs from "fs";

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
        }
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
        }
        const newId = (typeof id !=="number") ? parseInt(id) : parseInt(id);
        const data = await imageModels.getImageByBudayaId(newId);
        const response = responseMiddleWare("Success", "Success get data!", data);
        return res.status(200).json(response);
    },
    async uploadImage(req: Request, res: Response) {
        try {
          if (req.file) {
            console.log(req.file);
            const { budayaid } = req.body;
      
            if (!budayaid) {
              return res.status(400).json({
                message: 'Please input budaya id!'
              });
            }
      
            const budayaId = parseInt(budayaid);
            const paths = req.file.path;
      
            if (!paths) {
              return res.status(400).json({
                message: 'ERRORS unknown paths'
              });
            }
      
            // Upload to Cloudinary
            const uploading = await Uploader(paths);
      
            // Create image record in the database
            const creating = await imageModels.createImage(uploading, budayaId);
      
            // Remove the file from local storage
            fs.unlink(paths, (error) => {
              if (error) {
                console.error('Error deleting file:', error);
              }
            });
      
            if (creating) {
              return res.status(201).json({
                message: 'Upload success',
                location: uploading
              });
            } else {
              return res.status(500).json({
                message: 'Upload failed'
              });
            }
          } else {
            return res.status(400).json({
              message: 'No file uploaded'
            });
          }
        } catch (error) {
          console.error('Error during upload:', error);
          return res.status(500).json({
            message: 'Internal server error'
          });
        }
    }
};

export default ImageController;