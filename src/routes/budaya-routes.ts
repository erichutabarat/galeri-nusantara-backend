import { Router } from "express";
import Test from "../controller/Test";

const BudayaRoutes = Router();

BudayaRoutes.get('/', Test);

export default BudayaRoutes;