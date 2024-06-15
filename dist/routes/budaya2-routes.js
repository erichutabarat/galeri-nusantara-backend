"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Budaya_1 = __importDefault(require("../controller/Budaya"));
const Test_1 = __importDefault(require("../controller/Test"));
const BudayaTwoRoutes = (0, express_1.Router)();
BudayaTwoRoutes.get('/:id', Test_1.default);
BudayaTwoRoutes.put('/:id', Budaya_1.default.updateBudaya);
exports.default = BudayaTwoRoutes;
