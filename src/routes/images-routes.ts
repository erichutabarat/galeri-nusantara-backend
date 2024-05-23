import { Router } from "express";
import ImageController from "../controller/Image";
import UploadMiddleWare from "../middleware/upload-middleware";

const ImagesRoutes = Router();

ImagesRoutes.get('/', ImageController.getAll);
ImagesRoutes.get('/:id', ImageController.getById);
ImagesRoutes.get('/budaya/:id', ImageController.getByBudayaId);

ImagesRoutes.post('/upload', UploadMiddleWare.single("images"), ImageController.uploadImage);

export default ImagesRoutes;