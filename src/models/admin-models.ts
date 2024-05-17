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
    },
    async Login(username: string, password: string): Promise<boolean>{
        try {
            const data = await prisma.admin.findFirst({
                where: {
                    username: username,
                    password: password
                }
            });
            if(!data){
                return false;
            }
            return true;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export default AdminModels;