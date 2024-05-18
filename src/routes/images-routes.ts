import { Router } from "express";
import Test from "../controller/Test";
import ImageController from "../controller/Image";

const ImagesRoutes = Router();

ImagesRoutes.get('/', ImageController.getAll);
ImagesRoutes.get('/:id', ImageController.getById);
ImagesRoutes.get('/budaya/:id', ImageController.getByBudayaId);

export default ImagesRoutes;