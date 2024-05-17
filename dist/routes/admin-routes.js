"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Test_1 = __importDefault(require("../controller/Test"));
const Admin_1 = __importDefault(require("../controller/Admin"));
const AdminRoutes = (0, express_1.Router)();
AdminRoutes.get('/', Test_1.default);
AdminRoutes.post('/login', Admin_1.default.adminLogin);
AdminRoutes.post('/detail', Admin_1.default.adminDetail);
exports.default = AdminRoutes;
