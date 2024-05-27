import express, { Request, Response } from 'express';
import AdminRoutes from '../routes/admin-routes';
import ContributorRoutes from '../routes/contributor-routes';
import BudayaRoutes from '../routes/budaya-routes';
import CategoryRoutes from '../routes/category-routes';
import ImagesRoutes from '../routes/images-routes';
import path
 from 'path';
import cors from "cors";

const server = express();

server.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static('public'));

server.get('/', (req: Request, res: Response) => {
    res.json({
        message: 'hello world'
    });
});

server.use('/admin', AdminRoutes);
server.use('/contributor', ContributorRoutes);
server.use('/budaya', BudayaRoutes);
server.use('/category', CategoryRoutes);
server.use('/images', ImagesRoutes);

export default server;