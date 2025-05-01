"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
class AuthMiddleware {
    verifyToken(req, res, next) {
        var _a;
        try {
            const token = (_a = req.header("Authorization")) === null || _a === void 0 ? void 0 : _a.replace("Bearer ", "");
            if (!token)
                throw { message: "unauthorized" };
            const verifyUser = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
            req.user = verifyUser;
            next();
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error });
        }
    }
    verifyRole(req, res, next) {
        var _a;
        try {
            if (((_a = req.user) === null || _a === void 0 ? void 0 : _a.role) !== "ORGANIZER")
                throw { message: "Organizer only" };
            next();
        }
        catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }
}
exports.AuthMiddleware = AuthMiddleware;
