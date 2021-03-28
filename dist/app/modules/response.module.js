"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function success(req, res, message, status) {
    let StatusCode = status || 200;
    res.status(StatusCode)
        .send({
        error: "",
        status: StatusCode,
        message: message
    });
}
function error(req, res, message, status) {
    let StatusCode = status || 500;
    res.status(StatusCode)
        .send({
        error: message,
        status: StatusCode,
        message: ""
    });
}
exports.default = { success, error };
