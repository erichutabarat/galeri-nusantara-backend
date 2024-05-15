import { Router } from "express";
import Test from "../controller/Test";

const ContributorRoutes = Router();

ContributorRoutes.get('/', Test);

export default ContributorRoutes;