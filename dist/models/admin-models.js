"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../application/database"));
const AdminModels = {
    async getAll() {
        try {
            const data = await database_1.default.admin.findMany();
            return data;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
};
exports.default = AdminModels;
