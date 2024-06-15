"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../application/database"));
const jwt_auth_1 = __importDefault(require("../auth/jwt-auth"));
const client_1 = require("@prisma/client");
const BudayaModels = {
    async getAll() {
        try {
            const data = database_1.default.budaya.findMany({
                include: {
                    images: true
                }
            });
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
                },
                include: {
                    images: true
                }
            });
            return data;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    },
    async createBudaya(token, title, source, description) {
        try {
            const user = jwt_auth_1.default.decode(token);
            if (!user) {
                return null;
            }
            const userjson = JSON.parse(user);
            if (!("user" in userjson)) {
                return null;
            }
            const users = userjson.user;
            const userdata = await database_1.default.contributor.findUnique({
                select: {
                    id: true,
                    username: true
                },
                where: {
                    username: users
                }
            });
            if (!userdata) {
                return null;
            }
            const sampleImage = {
                url: 'http://res.cloudinary.com/djwftgm6b/image/upload/v1715915182/sample.jpg',
                description: 'Sample'
            };
            const data = await database_1.default.budaya.create({
                data: {
                    title: title,
                    source: source,
                    description: description,
                    authorId: userdata.id,
                    images: {
                        create: {
                            url: sampleImage.url,
                            description: sampleImage.description
                        }
                    }
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
    async updateBudaya(token, id, title, source, description) {
        try {
            const user = jwt_auth_1.default.decode(token);
            if (!user) {
                return null;
            }
            const userjson = JSON.parse(user);
            if (!("user" in userjson)) {
                return null;
            }
            const users = userjson.user;
            const userdata = await database_1.default.contributor.findUnique({
                select: {
                    id: true,
                    username: true
                },
                where: {
                    username: users
                }
            });
            if (!userdata) {
                return null;
            }
            const existingBudaya = await database_1.default.budaya.findUnique({
                where: {
                    id: id
                }
            });
            if (!existingBudaya) {
                return null;
            }
            const updatedData = await database_1.default.budaya.update({
                where: {
                    id: id
                },
                data: {
                    title: title,
                    source: source,
                    description: description,
                }
            });
            return updatedData;
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    return null;
                }
            }
            console.error(error);
            throw error;
        }
    },
    async deleteBudaya(token, id) {
        try {
            const user = jwt_auth_1.default.decode(token);
            if (!user) {
                return null;
            }
            const userjson = JSON.parse(user);
            if (!("user" in userjson)) {
                return null;
            }
            const users = userjson.user;
            const userdata = await database_1.default.contributor.findUnique({
                select: {
                    id: true,
                    username: true
                },
                where: {
                    username: users
                }
            });
            if (!userdata) {
                return null;
            }
            const data = await database_1.default.budaya.deleteMany({
                where: {
                    id: id,
                    authorId: userdata.id
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
exports.default = BudayaModels;
