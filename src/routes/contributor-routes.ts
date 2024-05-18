import { Router } from "express";
import Test from "../controller/Test";
import ContributorController from "../controller/Contributor";

const ContributorRoutes = Router();

ContributorRoutes.get('/', ContributorController.getAll);
ContributorRoutes.get('/:id', ContributorController.getById);
ContributorRoutes.post('/login', ContributorController.getLogin);


export default ContributorRoutes;