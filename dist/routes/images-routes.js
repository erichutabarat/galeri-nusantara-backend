"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Test_1 = __importDefault(require("../controller/Test"));
const ImagesRoutes = (0, express_1.Router)();
ImagesRoutes.get('/', Test_1.default);
exports.default = ImagesRoutes;
