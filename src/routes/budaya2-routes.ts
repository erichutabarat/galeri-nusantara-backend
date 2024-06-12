import { Router } from "express";
import BudayaController from "../controller/Budaya";

const BudayaTwoRoutes = Router();

BudayaTwoRoutes.put('/:id', BudayaController.updateBudaya);

export default BudayaTwoRoutes;