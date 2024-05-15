"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./application/server"));
const Apps = server_1.default;
const port = process.env.PORT || 8080;
Apps.listen(port, () => {
    console.log(`Server running on http://127.0.0.1:${port}`);
});
