"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const setResObj_1 = require("../../utils/setResObj");
const Games_1 = __importDefault(require("../../Games"));
const games = Games_1.default.instance();
module.exports = function (app) {
    app.post("/four-in-a-row/move", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        let act = req.body;
        let gameObj = games.get(act.uuid);
        if (gameObj == undefined) {
            (0, setResObj_1.setResObj)(res, 'gameNotExists');
            return;
        }
        if (gameObj == undefined || gameObj.turn !== act.turn) {
            (0, setResObj_1.setResObj)(res, 'aintYourTurn');
            return;
        }
        games.setAct(act);
        res.status(200);
        res.send(gameObj);
    });
};
