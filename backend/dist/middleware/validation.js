"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRegister = void 0;
const express_validator_1 = require("express-validator");
exports.validateRegister = [
    (0, express_validator_1.body)("email")
        .notEmpty()
        .withMessage("Email Required")
        .isEmail()
        .withMessage("Invalid email format"),
    (0, express_validator_1.body)("password").notEmpty().withMessage("Password required"),
    (0, express_validator_1.body)("name").notEmpty().withMessage("Name required"),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return;
        }
        next();
    },
];
