"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const responseMiddleWare = (status, message, data) => {
    return {
        status,
        message,
        data: data
    };
};
exports.default = responseMiddleWare;
