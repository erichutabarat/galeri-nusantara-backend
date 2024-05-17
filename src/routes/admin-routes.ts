import { Router } from "express";
import Test from "../controller/Test";
import AdminController from "../controller/Admin";

const AdminRoutes = Router();

AdminRoutes.get('/', Test);
AdminRoutes.post('/login', AdminController.adminLogin);
AdminRoutes.post('/detail', AdminController.adminDetail);

export default AdminRoutes;