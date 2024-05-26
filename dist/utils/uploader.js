"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = __importDefault(require("./cloudinary"));
const Uploader = async (imagePath) => {
    const options = {
        use_filename: true,
        unique_filename: false,
        overwrite: true,
    };
    try {
        const result = await cloudinary_1.default.uploader.upload(imagePath, options);
        return result.url;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
};
exports.default = Uploader;
