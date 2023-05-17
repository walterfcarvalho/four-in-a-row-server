"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setResObj = void 0;
const const_1 = require("../const");
const setResObj = (res, msg) => res.status(404).send(const_1.erroMsg.get(msg));
exports.setResObj = setResObj;
