import prisma from "../application/database";

const BudayaModels = {
    async getAll(){
        try {
            const data = prisma.budaya.findMany();
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
                }
            });
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
};

export default BudayaModels;