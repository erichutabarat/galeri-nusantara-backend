"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Test_1 = __importDefault(require("../controller/Test"));
const ContributorRoutes = (0, express_1.Router)();
ContributorRoutes.get('/', Test_1.default);
exports.default = ContributorRoutes;
