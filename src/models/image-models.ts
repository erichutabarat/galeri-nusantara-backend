import prisma from "../application/database";
import Cloudinary from "../utils/cloudinary";

const imageModels = {
    async getAll(){
        try {
            const data = await prisma.image.findMany();
            return data;      
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
    async getImageUrlById(id: string | number){
        const asset_id = (typeof id ==="number") ? id.toString() : id;
        const data = await Cloudinary.api.resources_by_asset_ids(asset_id);
        return data.resources[0].url;
    },
    async getImageById(id: number){
        try {
            const data = await prisma.image.findUnique({
                where: {
                    id
                }
            });
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
    async getImageByBudayaId(id: number){
        try {
            const data = await prisma.image.findMany({
                where: {
                    budayaId: id
                }
            });
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
    async createImage(url: string, budayaId: number, description?:string,){
        try {
            const deleteCurrent = await prisma.image.deleteMany({
                where: {
                    budayaId: budayaId
                }
            });
            if(!deleteCurrent){
                return null;
            }
            const data = await prisma.image.create({
                data: {
                    url: url,
                    description: description ?? "null",
                    budayaId: budayaId
                }
            });
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
};

export default imageModels;