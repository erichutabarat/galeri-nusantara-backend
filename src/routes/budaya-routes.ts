import { Router } from "express";
import BudayaController from "../controller/Budaya";
import Test from "../controller/Test";

const BudayaRoutes = Router();

BudayaRoutes.get('/', BudayaController.getAll);
BudayaRoutes.delete('/', BudayaController.deleteBudaya);
BudayaRoutes.get('/:id', BudayaController.getById);
BudayaRoutes.put('/:id/update', BudayaController.updateBudaya);
BudayaRoutes.post('/', BudayaController.createBudaya);

export default BudayaRoutes;