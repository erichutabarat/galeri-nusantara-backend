import prisma from "../application/database";

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
    }
};

export default ContributorModels;