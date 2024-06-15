"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_middleware_1 = __importDefault(require("../middleware/response-middleware"));
const image_models_1 = __importDefault(require("../models/image-models"));
const uploader_1 = __importDefault(require("../utils/uploader"));
const fs_1 = __importDefault(require("fs"));
const ImageController = {
    async getAll(req, res) {
        const data = await image_models_1.default.getAll();
        const response = (0, response_middleware_1.default)("Success", "Success get data!", data);
        return res.status(200).json(response);
    },
    async getById(req, res) {
        const { id } = req.params;
        if (!id) {
            const response = (0, response_middleware_1.default)("Failed", "Please input id image!");
            return res.status(400).json(response);
        }
        const newId = (typeof id !== "number") ? parseInt(id) : parseInt(id);
        const data = await image_models_1.default.getImageById(newId);
        const response = (0, response_middleware_1.default)("Success", "Success get data!", data);
        return res.status(200).json(response);
    },
    async getByBudayaId(req, res) {
        const { id } = req.params;
        if (!id) {
            const response = (0, response_middleware_1.default)("Failed", "Please input id budaya!");
            return res.status(400).json(response);
        }
        const newId = (typeof id !== "number") ? parseInt(id) : parseInt(id);
        const data = await image_models_1.default.getImageByBudayaId(newId);
        const response = (0, response_middleware_1.default)("Success", "Success get data!", data);
        return res.status(200).json(response);
    },
    async uploadImage(req, res) {
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
                const uploading = await (0, uploader_1.default)(paths);
                // Create image record in the database
                const creating = await image_models_1.default.createImage(uploading, budayaId);
                // Remove the file from local storage
                fs_1.default.unlink(paths, (error) => {
                    if (error) {
                        console.error('Error deleting file:', error);
                    }
                });
                if (creating) {
                    return res.status(201).json({
                        message: 'Upload success',
                        location: uploading
                    });
                }
                else {
                    return res.status(500).json({
                        message: 'Upload failed'
                    });
                }
            }
            else {
                return res.status(400).json({
                    message: 'No file uploaded'
                });
            }
        }
        catch (error) {
            console.error('Error during upload:', error);
            return res.status(500).json({
                message: 'Internal server error'
            });
        }
    }
};
exports.default = ImageController;
