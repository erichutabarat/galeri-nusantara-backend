import { Router } from "express";
import BudayaController from "../controller/Budaya";

const BudayaRoutes = Router();

BudayaRoutes.get('/', BudayaController.getAll);
BudayaRoutes.delete('/', BudayaController.deleteBudaya);
BudayaRoutes.get('/:id', BudayaController.getById);
BudayaRoutes.put('/', BudayaController.updateBudaya);
BudayaRoutes.post('/', BudayaController.createBudaya);

export default BudayaRoutes;