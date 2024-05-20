"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Image_1 = __importDefault(require("../controller/Image"));
const upload_middleware_1 = __importDefault(require("../middleware/upload-middleware"));
const uploader_1 = __importDefault(require("../utils/uploader"));
const image_models_1 = __importDefault(require("../models/image-models"));
const fs_1 = __importDefault(require("fs"));
const ImagesRoutes = (0, express_1.Router)();
ImagesRoutes.get('/', Image_1.default.getAll);
ImagesRoutes.get('/:id', Image_1.default.getById);
ImagesRoutes.get('/budaya/:id', Image_1.default.getByBudayaId);
ImagesRoutes.post('/upload', upload_middleware_1.default.single("images"), async (req, res) => {
    if (req.file) {
        const { budayaid } = req.body;
        if (!budayaid) {
            return res.json({
                message: 'Please input budaya id!'
            });
        }
        const budayaId = parseInt(budayaid);
        const paths = req.file.path;
        const uploading = await (0, uploader_1.default)(paths);
        const creating = await image_models_1.default.createImage(uploading, budayaId);
        fs_1.default.unlink(paths, (error) => {
            if (error) {
                console.error(error);
            }
        });
        if (creating) {
            return res.json({
                message: 'upload success',
                location: uploading
            });
        }
        else {
            return res.json({
                message: 'upload failed'
            });
        }
    }
    else {
        return res.json({
            message: 'upload failed'
        });
    }
});
exports.default = ImagesRoutes;
