"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require('dotenv').config();
const jwtAuth = {
    create(username) {
        const secret = process.env.SECRET_KEY;
        const payload = { user: username };
        const options = { expiresIn: "3h" };
        if (!secret) {
            throw new Error("Secret Key Missing");
        }
        const token = jsonwebtoken_1.default.sign(payload, secret, options);
        return {
            token: token
        };
    },
    check(token) {
        const secret = process.env.SECRET_KEY;
        if (!secret) {
            return false;
        }
        try {
            const result = jsonwebtoken_1.default.verify(token, secret);
            return (result) ? true : false;
        }
        catch (error) {
            return false;
        }
    },
    decode(token) {
        const checkfirst = this.check(token);
        if (!checkfirst) {
            return "";
        }
        const result = jsonwebtoken_1.default.decode(token);
        if (result && typeof result !== "string") {
            return JSON.stringify(result);
        }
        return result;
    }
};
exports.default = jwtAuth;
