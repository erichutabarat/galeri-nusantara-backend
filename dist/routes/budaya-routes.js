"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Budaya_1 = __importDefault(require("../controller/Budaya"));
const BudayaRoutes = (0, express_1.Router)();
BudayaRoutes.get('/', Budaya_1.default.getAll);
BudayaRoutes.delete('/', Budaya_1.default.deleteBudaya);
BudayaRoutes.get('/:id', Budaya_1.default.getById);
BudayaRoutes.post('/', Budaya_1.default.createBudaya);
exports.default = BudayaRoutes;
