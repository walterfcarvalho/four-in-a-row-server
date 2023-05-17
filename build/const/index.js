"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.erroMsg = exports.newGameData = exports.myEmptyGrid = void 0;
exports.myEmptyGrid = [
    { c: [{ v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 1 }] },
    { c: [{ v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 1 }, { v: 0 }] },
    { c: [{ v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 1 }, { v: 0 }, { v: 0 }] },
    { c: [{ v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }] },
    { c: [{ v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }] },
    { c: [{ v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }] }
];
exports.newGameData = {
    uuid: "",
    turn: undefined,
    winner: undefined,
    pOneIp: undefined,
    pTwoIp: undefined,
    lastAct: undefined,
    board: exports.myEmptyGrid,
};
exports.erroMsg = new Map([
    ["gameNotExists", {
            code: 404,
            message: "This match not exists"
        }],
    ["alreadyHasTwoPlayes", {
            code: 404,
            message: "This game already have two players"
        }],
    ["aintYourTurn", {
            code: 200,
            message: "Ain't your turn to play ;)"
        }]
]);
//module.exports = { newGameData, myEmptyGrid, erroMsg };
