import { Router } from "express";
import Test from "../controller/Test";

const CategoryRoutes = Router();

CategoryRoutes.get('/', Test);

export default CategoryRoutes;