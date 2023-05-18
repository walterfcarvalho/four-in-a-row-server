"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const consign_1 = __importDefault(require("consign"));
const body_parser_1 = __importDefault(require("body-parser"));
const appConf = (0, express_1.default)();
appConf.use((0, cors_1.default)());
appConf.options('*', (0, cors_1.default)());
appConf.use(body_parser_1.default.json());
(0, consign_1.default)({ cwd: process.env.NODE_ENV === "DEV" ? "./src" : "./" })
    .include("routes/four-in-a-row/")
    .into(appConf);
appConf.use("/", express_1.default.static("./src/public"));
appConf.use('/', (req, res) => {
});
exports.default = appConf;
