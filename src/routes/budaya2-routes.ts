import { Router } from "express";
import BudayaController from "../controller/Budaya";
import Test from "../controller/Test";

const BudayaTwoRoutes = Router();

BudayaTwoRoutes.get('/:id', Test);
BudayaTwoRoutes.put('/:id', BudayaController.updateBudaya);

export default BudayaTwoRoutes;