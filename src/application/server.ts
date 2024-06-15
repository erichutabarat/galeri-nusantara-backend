import express, { Request, Response } from 'express';
import AdminRoutes from '../routes/admin-routes';
import ContributorRoutes from '../routes/contributor-routes';
import BudayaRoutes from '../routes/budaya-routes';
import ImagesRoutes from '../routes/images-routes';
import cors from "cors";
import bodyParser from "body-parser";
import BudayaTwoRoutes from '../routes/budaya2-routes';
import path from 'path';
const server = express();

server.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));
server.use(bodyParser.json());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, '../public')));

server.get('/', (req: Request, res: Response) => {
    res.json({
        message: 'hello world'
    });
});

server.use('/admin', AdminRoutes);
server.use('/contributor', ContributorRoutes);
server.use('/budaya', BudayaRoutes);
server.use('/budayatwo', BudayaTwoRoutes);
server.use('/images', ImagesRoutes);

export default server;