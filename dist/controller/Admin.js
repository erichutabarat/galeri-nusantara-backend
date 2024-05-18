"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const admin_models_1 = __importDefault(require("../models/admin-models"));
const jwt_auth_1 = __importDefault(require("../auth/jwt-auth"));
const response_middleware_1 = __importDefault(require("../middleware/response-middleware"));
const AdminController = {
    async adminLogin(req, res) {
        const { username, password } = req.body;
        if (!username || !password) {
            const response = (0, response_middleware_1.default)("Failed", "Please input username and passowrd!");
            return res.status(400).json(response);
        }
        const login = await admin_models_1.default.Login(username, password);
        if (login) {
            const generateToken = jwt_auth_1.default.create(username);
            const response = (0, response_middleware_1.default)("Success", "Login success!", generateToken);
            return res.status(200).json(response);
        }
        else {
            const response = (0, response_middleware_1.default)("Failed", "Incorrect username or password!");
            return res.status(404).json(response);
        }
    },
    async adminDetail(req, res) {
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
            return res.status(404).json(response);
        }
        const data = await admin_models_1.default.getDetailByUser(user);
        if (!data) {
            const response = (0, response_middleware_1.default)("Failed", "User not found!");
            return res.status(404).json(response);
        }
        const response = (0, response_middleware_1.default)("Success", "Success get data", data);
        return res.status(200).json(response);
    }
};
exports.default = AdminController;
