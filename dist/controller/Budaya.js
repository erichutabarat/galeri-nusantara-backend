"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const budaya_models_1 = __importDefault(require("../models/budaya-models"));
const response_middleware_1 = __importDefault(require("../middleware/response-middleware"));
const BudayaController = {
    async getAll(req, res) {
        const data = await budaya_models_1.default.getAll();
        if (!data) {
            const response = (0, response_middleware_1.default)("Failed", "Budaya still empty!", []);
            return res.status(404).json(response);
        }
        const response = (0, response_middleware_1.default)("Success", "Get budaya list success!", data);
        return res.status(200).json(response);
    },
    async getById(req, res) {
        const { id } = req.params;
        if (!id) {
            const response = (0, response_middleware_1.default)("Failed", "Invalid id!");
            return res.status(404).json(response);
        }
        const budayaid = parseInt(id);
        const data = await budaya_models_1.default.getById(budayaid);
        if (!data) {
            const response = (0, response_middleware_1.default)("Failed", "Budaya not found!");
            return res.status(404).json(response);
        }
        const response = (0, response_middleware_1.default)("Success", "Success get budaya detail", data);
        return res.status(200).json(response);
    },
    async createBudaya(req, res) {
        const { token, id, title, source, description } = req.body;
        if (!token || !title || !source || !description) {
            const response = (0, response_middleware_1.default)("Failed", "Please input all requirements!");
            return res.status(404).json(response);
        }
        let data;
        if (id) {
            const ID = (typeof id === "number" ? id : parseInt(id));
            data = await budaya_models_1.default.updateBudaya(token, ID, title, source, description);
        }
        else {
            data = await budaya_models_1.default.createBudaya(token, title, source, description);
        }
        if (!data) {
            console.log(data);
            const response = (0, response_middleware_1.default)("Failed", "Something error while creating new Budayas!");
            return res.status(404).json(response);
        }
        let response;
        if (id) {
            response = (0, response_middleware_1.default)("Success", "Success update Budaya", data);
        }
        else {
            response = (0, response_middleware_1.default)("Success", "Success create new Budaya", data);
        }
        return res.status(200).json(response);
    },
    async updateBudaya(req, res) {
        console.log("TEST");
        const { id } = req.params;
        const { token, title, source, description } = req.body;
        if (!token || !id || !title || !source || !description) {
            const response = (0, response_middleware_1.default)("Failed", "Please input all requirements!");
            return res.status(400).json(response);
        }
        const ID = (typeof id === "number") ? id : parseInt(id);
        if (isNaN(ID)) {
            const response = (0, response_middleware_1.default)("Failed", "Invalid ID format!");
            return res.status(400).json(response);
        }
        try {
            const data = await budaya_models_1.default.updateBudaya(token, ID, title, source, description);
            if (!data) {
                const response = (0, response_middleware_1.default)("Failed", "Something went wrong while updating Budaya!");
                return res.status(404).json(response);
            }
            const response = (0, response_middleware_1.default)("Success", "Successfully updated Budaya", data);
            return res.status(200).json(response);
        }
        catch (error) {
            const response = (0, response_middleware_1.default)("Error", "Internal Server Error", error.message);
            return res.status(500).json(response);
        }
    },
    async deleteBudaya(req, res) {
        const { token, id } = req.body;
        if (!token || !id) {
            const response = (0, response_middleware_1.default)("Failed", "Please input all requirementss!");
            return res.status(404).json(response);
        }
        const ID = (typeof id === "number") ? id : parseInt(id);
        const data = await budaya_models_1.default.deleteBudaya(token, ID);
        if (!data) {
            const response = (0, response_middleware_1.default)("Failed", "Something error while creating new Budaya!");
            return res.status(404).json(response);
        }
        const response = (0, response_middleware_1.default)("Success", "Success delete Budaya", data);
        return res.status(200).json(response);
    }
};
exports.default = BudayaController;
