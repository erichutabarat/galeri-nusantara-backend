import { Router } from "express";
import ImageController from "../controller/ImageController";
import UploadMiddleWare from "../middleware/upload-middleware";

const ImagesRoutes = Router();

ImagesRoutes.get('/', ImageController.getAll);
ImagesRoutes.get('/:id', ImageController.getById);
ImagesRoutes.post('/upload', (req, res, next) => {
    UploadMiddleWare.single("images")(req, res, (err) => {
        if (err) {
            return res.status(400).json({ message: "File upload failed", error: err.message });
        }
        next();
    });
}, ImageController.uploadImage);

export default ImagesRoutes;