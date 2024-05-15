import prisma from "../application/database";

const AdminModels = {
    async getAll(){
        try {
            const data = await prisma.admin.findMany();
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export default AdminModels;