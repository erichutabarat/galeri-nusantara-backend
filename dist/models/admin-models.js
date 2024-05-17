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
    },
    async Login(username, password) {
        try {
            const data = await database_1.default.admin.findFirst({
                where: {
                    username: username,
                    password: password
                }
            });
            if (!data) {
                return false;
            }
            return true;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    },
    async getDetailByUser(username) {
        try {
            const data = await database_1.default.admin.findFirst({
                select: {
                    id: true,
                    username: true,
                    email: true,
                    role: true
                },
                where: {
                    username: username
                }
            });
            if (!data) {
                return null;
            }
            return data;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
};
exports.default = AdminModels;
