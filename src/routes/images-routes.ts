import { Router } from "express";
import Test from "../controller/Test";

const ImagesRoutes = Router();

ImagesRoutes.get('/', Test);

export default ImagesRoutes;