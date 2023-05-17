"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_express_1 = __importDefault(require("./config/config-express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = process.env.PORT || "3002";
config_express_1.default.listen(parseInt(port), '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
