import prisma from "../application/database";
import jwtAuth from "../auth/jwt-auth";
import { Prisma } from "@prisma/client";

const BudayaModels = {
    async getAll(){
        try {
            const data = prisma.budaya.findMany({
                include: {
                    images: true
                }
            });
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
    async getById(id: number){
        try {
            const data = prisma.budaya.findFirst({
                where: {
                    id: id
                },
                include: {
                    images: true
                }
            });
            return data;
        } catch (error) {
            console.error(error);
            return null;
        }
    },
    async createBudaya(token: string, title: string, source: string, description: string){
        try {
            const user = jwtAuth.decode(token);
            if(!user){
                return null;
            }
            const userjson = JSON.parse(user);
            if(!("user" in userjson)){
                return null;
            }
            const users = userjson.user;
            const userdata = await prisma.contributor.findUnique({
                select: {
                    id: true,
                    username: true
                },
                where: {
                    username: users
                }
            });
            if(!userdata){
                return null;
            }
            const sampleImage = {
                url: 'http://res.cloudinary.com/djwftgm6b/image/upload/v1715915182/sample.jpg',
                description: 'Sample'
            };
            const data = await prisma.budaya.create({
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

        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                // Anticipate Unique Error
                if (error.code === 'P2002') {
                    return null;
                }
            }
            console.error(error);
            throw error;
        }

    },
    async updateBudaya(token: string, id: number, title: string, source: string, description: string) {
        try {
            const user = jwtAuth.decode(token);
            if (!user) {
                return null;
            }
    
            const userjson = JSON.parse(user);
            if (!("user" in userjson)) {
                return null;
            }
    
            const users = userjson.user;
            const userdata = await prisma.contributor.findUnique({
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
    
            const existingBudaya = await prisma.budaya.findUnique({
                where: {
                    id: id
                }
            });
    
            if (!existingBudaya) {
                return null;
            }
    
            const updatedData = await prisma.budaya.update({
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
    
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    return null;
                }
            }
            console.error(error);
            throw error;
        }
    },
    async deleteBudaya(token: string, id: number){
        try {
            const user = jwtAuth.decode(token);
            if(!user){
                return null;
            }
            const userjson = JSON.parse(user);
            if(!("user" in userjson)){
                return null;
            }
            const users = userjson.user;
            const userdata = await prisma.contributor.findUnique({
                select: {
                    id: true,
                    username: true
                },
                where: {
                    username: users
                }
            });
            if(!userdata){
                return null;
            }
            const data = await prisma.budaya.deleteMany({
                where: {
                    id: id,
                    authorId: userdata.id
                }
            });
            return data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
};

export default BudayaModels;