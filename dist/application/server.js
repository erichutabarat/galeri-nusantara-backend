"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_routes_1 = __importDefault(require("../routes/admin-routes"));
const contributor_routes_1 = __importDefault(require("../routes/contributor-routes"));
const budaya_routes_1 = __importDefault(require("../routes/budaya-routes"));
const images_routes_1 = __importDefault(require("../routes/images-routes"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const budaya2_routes_1 = __importDefault(require("../routes/budaya2-routes"));
const path_1 = __importDefault(require("path"));
const server = (0, express_1.default)();
server.use((0, cors_1.default)({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));
server.use(body_parser_1.default.json());
server.use(express_1.default.json());
server.use(express_1.default.urlencoded({ extended: true }));
server.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
server.get('/', (req, res) => {
    res.json({
        message: 'hello world'
    });
});
server.use('/admin', admin_routes_1.default);
server.use('/contributor', contributor_routes_1.default);
server.use('/budaya', budaya_routes_1.default);
server.use('/budayatwo', budaya2_routes_1.default);
server.use('/images', images_routes_1.default);
exports.default = server;
