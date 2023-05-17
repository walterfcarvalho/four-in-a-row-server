"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Games_1 = __importDefault(require("../../Games"));
module.exports = (app) => {
    app.get("/four-in-a-row/new", (req, res) => {
        const Games = Games_1.default.instance();
        const newGameData = Games.newGame(req.ip);
        res.status(200);
        res.setHeader("Content-Type", "application/json");
        res.send(newGameData);
    });
};
