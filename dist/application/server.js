"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_routes_1 = __importDefault(require("../routes/admin-routes"));
const contributor_routes_1 = __importDefault(require("../routes/contributor-routes"));
const budaya_routes_1 = __importDefault(require("../routes/budaya-routes"));
const category_routes_1 = __importDefault(require("../routes/category-routes"));
const images_routes_1 = __importDefault(require("../routes/images-routes"));
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.get('/', (req, res) => {
    res.json({
        message: 'hello world'
    });
});
server.use('/admin', admin_routes_1.default);
server.use('/contributor', contributor_routes_1.default);
server.use('/budaya', budaya_routes_1.default);
server.use('/category', category_routes_1.default);
server.use('/images', images_routes_1.default);
exports.default = server;
