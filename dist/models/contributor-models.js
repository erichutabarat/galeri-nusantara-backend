"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
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
                    role: true,
                    posts: true
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
    },
    async getContributorByUser(username) {
        try {
            const data = await database_1.default.contributor.findUnique({
                where: {
                    username: username,
                },
                select: {
                    id: true,
                    username: true,
                    email: true,
                    role: true,
                    posts: true
                }
            });
            return data;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    },
    async Login(username, password) {
        try {
            const data = await database_1.default.contributor.findUnique({
                select: {
                    id: true,
                    username: true,
                    role: true
                },
                where: {
                    username: username,
                    password: password
                }
            });
            return data;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    },
    async Register(username, password, email) {
        try {
            const data = await database_1.default.contributor.create({
                data: {
                    username: username,
                    password: password,
                    email: email || null
                }
            });
            return data;
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                // Anticipate Unique Error
                if (error.code === 'P2002') {
                    return null;
                }
            }
            console.error(error);
            throw error;
        }
    },
    async Budaya(authorId) {
        try {
            const data = await database_1.default.budaya.findMany({
                where: {
                    authorId: authorId
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
