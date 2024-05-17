"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../application/database"));
const ContributorModels = {
    async getContributor() {
        try {
            const data = await database_1.default.contributor.findMany({
                select: {
                    id: true,
                    username: true,
                    role: true
                }
            });
            return data;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    },
    async getContributorById(id) {
        try {
            const data = await database_1.default.contributor.findUnique({
                select: {
                    id: true,
                    username: true,
                    role: true
                },
                where: {
                    id: id
                }
            });
            return data;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }
};
exports.default = ContributorModels;
