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
    async getSample(){
        const id = '7677b5f4d412327487844b5132c487e3';
        const data = await Cloudinary.api.resources_by_asset_ids(id);
        return data.resources[0].url;;
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
    }
};

export default imageModels;