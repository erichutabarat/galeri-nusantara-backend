"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Contributor_1 = __importDefault(require("../controller/Contributor"));
const ContributorRoutes = (0, express_1.Router)();
ContributorRoutes.get('/', Contributor_1.default.getAll);
ContributorRoutes.get('/:id', Contributor_1.default.getById);
ContributorRoutes.post('/login', Contributor_1.default.getLogin);
ContributorRoutes.post('/register', Contributor_1.default.getRegister);
ContributorRoutes.post('/detail', Contributor_1.default.getDetail);
exports.default = ContributorRoutes;
