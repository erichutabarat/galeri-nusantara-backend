"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../application/database"));
const BudayaModels = {
    async getAll() {
        try {
            const data = database_1.default.budaya.findMany();
            return data;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    },
    async getById(id) {
        try {
            const data = database_1.default.budaya.findFirst({
                where: {
                    id: id
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
exports.default = BudayaModels;
