import { Router } from "express";
import ContributorController from "../controller/Contributor";

const ContributorRoutes = Router();

ContributorRoutes.get('/', ContributorController.getAll);
ContributorRoutes.get('/:id', ContributorController.getById);
ContributorRoutes.post('/login', ContributorController.getLogin);
ContributorRoutes.post('/register', ContributorController.getRegister);
ContributorRoutes.post('/detail', ContributorController.getDetail);

export default ContributorRoutes;