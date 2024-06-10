"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contributor_models_1 = __importDefault(require("../models/contributor-models"));
const response_middleware_1 = __importDefault(require("../middleware/response-middleware"));
const jwt_auth_1 = __importDefault(require("../auth/jwt-auth"));
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
        const response = (0, response_middleware_1.default)("Success", "Success get contributor detail ssss", data);
        return res.status(200).json(response);
    },
    async getLogin(req, res) {
        const { username, password } = req.body;
        if (!username || !password) {
            const response = (0, response_middleware_1.default)("Failed", "Please input username and password!");
            return res.status(400).json(response);
        }
        const data = await contributor_models_1.default.Login(username, password);
        if (data) {
            const generateToken = jwt_auth_1.default.create(username);
            const response = (0, response_middleware_1.default)("Success", "Success login!", generateToken);
            return res.status(200).json(response);
        }
        else {
            const response = (0, response_middleware_1.default)("Failed", "Incorrect username or password!");
            return res.status(404).json(response);
        }
    },
    async getRegister(req, res) {
        const { username, password, email } = req.body;
        if (!username || !password) {
            const response = (0, response_middleware_1.default)("Failed", "Please input username and password!");
            return res.status(400).json(response);
        }
        const emails = (email) ? email : null;
        const data = await contributor_models_1.default.Register(username, password, email);
        if (!data) {
            const response = (0, response_middleware_1.default)("Failed", "Username or Email already taken!");
            return res.status(400).json(response);
        }
        const response = (0, response_middleware_1.default)("Success", "Register success!", data);
        return res.status(200).json(response);
    },
    async getDetail(req, res) {
        const { token } = req.body;
        if (!token) {
            const response = (0, response_middleware_1.default)("Failed", "Please input token!");
            return res.status(400).json(response);
        }
        const decode = jwt_auth_1.default.decode(token);
        if (!decode) {
            const response = (0, response_middleware_1.default)("Failed", "Invalid token!");
            return res.status(400).json(response);
        }
        const user = JSON.parse(decode).user;
        if (!user) {
            const response = (0, response_middleware_1.default)("Failed", "Invalid token!");
            return res.status(400).json(response);
        }
        const data = await contributor_models_1.default.getContributorByUser(user);
        if (!data) {
            const response = (0, response_middleware_1.default)("Failed", "User not found!");
            return res.status(404).json(response);
        }
        const response = (0, response_middleware_1.default)("Success", "Success get data", data);
        return res.status(200).json(response);
    },
    async getBudaya(req, res) {
        const { authorId } = req.params;
        if (!authorId) {
            const response = (0, response_middleware_1.default)("Failed", "Please input token!");
            return res.status(400).json(response);
        }
        const authorid = (typeof authorId === "number") ? authorId : parseInt(authorId);
        const data = await contributor_models_1.default.Budaya(authorid);
        if (!data) {
            const response = (0, response_middleware_1.default)("Failed", "Empty data!");
            return res.status(400).json(response);
        }
        const response = (0, response_middleware_1.default)("Success", "Success get data", data);
        return res.status(200).json(response);
    }
};
exports.default = ContributorController;
