"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const budaya_models_1 = __importDefault(require("../models/budaya-models"));
const response_middleware_1 = __importDefault(require("../middleware/response-middleware"));
const BudayaController = {
    async getAll(req, res) {
        const data = budaya_models_1.default.getAll();
        if (!data) {
            const response = (0, response_middleware_1.default)("Failed", "Budaya still empty!", []);
            return res.status(404).json(response);
        }
        const response = (0, response_middleware_1.default)("Success", "Get budaya list success!", data);
        return res.status(200).json(response);
    }
};
exports.default = BudayaController;
