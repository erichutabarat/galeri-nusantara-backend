import { Router } from "express";
import Test from "../controller/Test";
import ContributorController from "../controller/Contributor";

const ContributorRoutes = Router();

ContributorRoutes.get('/', ContributorController.getAll);
ContributorRoutes.get('/:id', ContributorController.getById);
ContributorRoutes.post('/login', ContributorController.getLogin);
ContributorRoutes.post('/register', ContributorController.getRegister);
ContributorRoutes.post('/detail', ContributorController.getDetail);
ContributorRoutes.post('/budaya', ContributorController.getBudaya);

export default ContributorRoutes;