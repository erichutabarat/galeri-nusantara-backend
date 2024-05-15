"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Test_1 = __importDefault(require("../controller/Test"));
const CategoryRoutes = (0, express_1.Router)();
CategoryRoutes.get('/', Test_1.default);
exports.default = CategoryRoutes;
