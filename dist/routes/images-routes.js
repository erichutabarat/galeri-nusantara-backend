"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Image_1 = __importDefault(require("../controller/Image"));
const upload_middleware_1 = __importDefault(require("../middleware/upload-middleware"));
const ImagesRoutes = (0, express_1.Router)();
ImagesRoutes.get('/', Image_1.default.getAll);
ImagesRoutes.get('/:id', Image_1.default.getById);
ImagesRoutes.get('/budaya/:id', Image_1.default.getByBudayaId);
ImagesRoutes.post('/upload', upload_middleware_1.default.single("images"), Image_1.default.uploadImage);
exports.default = ImagesRoutes;
