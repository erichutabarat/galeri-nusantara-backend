import { Router } from "express";
import Test from "../controller/Test";

const AdminRoutes = Router();

AdminRoutes.get('/', Test);

export default AdminRoutes;