import { Router } from "express";
import Test from "../controller/Test";
import BudayaController from "../controller/Budaya";

const BudayaRoutes = Router();

BudayaRoutes.get('/', BudayaController.getAll);
BudayaRoutes.get('/:id', BudayaController.getById);
BudayaRoutes.post('/', BudayaController.createBudaya);

export default BudayaRoutes;