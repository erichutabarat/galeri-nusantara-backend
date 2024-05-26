"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../application/database"));
const cloudinary_1 = __importDefault(require("../utils/cloudinary"));
const imageModels = {
    async getAll() {
        try {
            const data = await database_1.default.image.findMany();
            return data;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    },
    async getImageUrlById(id) {
        const asset_id = (typeof id === "number") ? id.toString() : id;
        const data = await cloudinary_1.default.api.resources_by_asset_ids(asset_id);
        return data.resources[0].url;
    },
    async getImageById(id) {
        try {
            const data = await database_1.default.image.findUnique({
                where: {
                    id
                }
            });
            return data;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    },
    async getImageByBudayaId(id) {
        try {
            const data = await database_1.default.image.findMany({
                where: {
                    budayaId: id
                }
            });
            return data;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    },
    async createImage(url, budayaId, description) {
        try {
            const data = await database_1.default.image.create({
                data: {
                    url: url,
                    description: description ?? "null",
                    budayaId: budayaId
                }
            });
            return data;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
};
exports.default = imageModels;
