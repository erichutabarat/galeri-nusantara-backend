"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contributor_models_1 = __importDefault(require("../models/contributor-models"));
const response_middleware_1 = __importDefault(require("../middleware/response-middleware"));
const ContributorController = {
    async getAll(req, res) {
        const data = await contributor_models_1.default.getContributor();
        if (!data) {
            const response = (0, response_middleware_1.default)("Failed", "Contributor List Empty!");
            return res.status(404).json(response);
        }
        const response = (0, response_middleware_1.default)("Success", "Success get contributor list", data);
        res.status(200).json(response);
    },
    async getById(req, res) {
        const { id } = req.params;
        if (!id) {
            const response = (0, response_middleware_1.default)("Failed", "Invalid id!");
            return res.status(404).json(response);
        }
        const userid = parseInt(id);
        const data = await contributor_models_1.default.getContributorById(userid);
        if (!data) {
            const response = (0, response_middleware_1.default)("Failed", "Contributor not found!");
            return res.status(404).json(response);
        }
        const response = (0, response_middleware_1.default)("Success", "Success get contributor detail", data);
        return res.status(200).json(response);
    }
};
exports.default = ContributorController;
