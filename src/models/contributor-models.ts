import { Prisma } from "@prisma/client";
import prisma from "../application/database";
import Cloudinary from "../utils/cloudinary";
import imageModels from "./image-models";

const ContributorModels = {
    async getContributor(){
        try {
            const data = await prisma.contributor.findMany({
                select: {
                    id: true,
                    username: true,
                    role: true
                }
            });
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
    async getContributorById(id: number){
        try {
            const data = await prisma.contributor.findUnique({
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
        } catch (error) {
            console.error(error);
            return null;
        }
    },
    async getContributorByUser(username: string){
        try {
            const data = await prisma.contributor.findUnique({
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
            return data;
        } catch (error) {
            console.error(error);
            return null;
        }
    },
    async Login(username: string, password: string){
        try {
            const data = await prisma.contributor.findUnique({
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
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
    async Register(username: string, password: string, email?: string){
        try {
            const data = await prisma.contributor.create({
                data: {
                    username: username,
                    password: password,
                    email: email || null
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
    }
};

export default ContributorModels;