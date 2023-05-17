"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const const_1 = require("../const");
//const { v4: uuidv4 } = require('uuid');
//const { emptyGrid, newGameData } = require("../const");
class PrivateGames {
    constructor() {
        this.newGame = (ip) => {
            // let uuid = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
            let uuid = (0, uuid_1.v4)();
            uuid = (uuid[0] + uuid[9] + uuid[14] + uuid[19] + uuid[24])
                .toUpperCase();
            let aGameData = {
                ...const_1.newGameData,
                uuid: uuid,
                pOneIp: ip
            };
            this.games.set(uuid, aGameData);
            return aGameData;
        };
        this.get = (id) => this.games.get(id.toUpperCase());
        this.isGameId = (id) => this.games.has(id.toUpperCase());
        this.joinP2 = (id, ip) => {
            let game = this.get(id);
            if (!game) {
                return;
            }
            game.pTwoIp = ip;
            game.turn = 1;
            this.games.set(id, game);
            return game;
        };
        this.setAct = (act) => {
            let game = this.get(act.uuid);
            if (!game) {
                return;
            }
            game.board[act.row].c[act.col].v = 1;
            if (act.turn == 1)
                game.turn = 2;
            if (act.turn == 2)
                game.turn = 1;
            if (this.checkWinner(act)) {
                game.winner = act.turn;
            }
            this.games.set(game.uuid, game);
        };
        this.checkWinner = (act) => {
            let game = this.get(act.uuid);
            if (!game) {
                return;
            }
            let board = game.board;
            let row = act.row;
            let col = act.col;
            let i = 0;
            let ini = 0;
            let end = 0;
            for (i = 0; i < 4; i++) {
                ini = act.col - 3 + i;
                end = act.col + i;
                if (ini < 0 || end > board.length - 1)
                    continue;
                if (board[row].c[ini + 0].v == act.turn &&
                    board[row].c[ini + 1].v == act.turn &&
                    board[row].c[ini + 2].v == act.turn &&
                    board[row].c[ini + 3].v == act.turn) {
                    return true;
                }
            }
            for (i = 0; i < 4; i++) {
                ini = act.row - 3 + i;
                end = act.row + i;
                if (ini < 0 || end > board.length - 1)
                    continue;
                if (board[ini + 0].c[col].v == act.turn &&
                    board[ini + 1].c[col].v == act.turn &&
                    board[ini + 2].c[col].v == act.turn &&
                    board[ini + 3].c[col].v == act.turn) {
                    return true;
                }
            }
            for (i = 0; i < 4; i++) {
                let row_ini = act.row - 3 + i;
                let row_end = act.row + i;
                let col_ini = act.col - 3 + i;
                let col_end = act.col + i;
                if (row_ini < 0 || row_end > board.length ||
                    col_ini < 0 || col_end > board.length)
                    continue;
                if (board[row_ini + 0].c[col_ini + 0].v == act.turn &&
                    board[row_ini + 1].c[col_ini + 1].v == act.turn &&
                    board[row_ini + 2].c[col_ini + 2].v == act.turn &&
                    board[row_ini + 3].c[col_ini + 3].v == act.turn)
                    return true;
            }
            for (i = 0; i < 4; i++) {
                let row_ini = act.row + i;
                let col_ini = act.col - i;
                let row_end = act.row - 3 + i;
                let col_end = act.col + 3 - i;
                if (row_ini < 0 || row_end > board.length ||
                    col_ini < 0 || col_end > board.length)
                    continue;
                if (board[row_ini - 0].c[col_ini + 0].v == act.turn &&
                    board[row_ini - 1].c[col_ini + 1].v == act.turn &&
                    board[row_ini - 2].c[col_ini + 2].v == act.turn &&
                    board[row_ini - 3].c[col_ini + 3].v == act.turn)
                    return true;
            }
            return false;
        };
        this.games = new Map([]);
    }
}
class Games {
    constructor() { }
    static instance() {
        if (!this.myInstance) {
            this.myInstance = new PrivateGames();
        }
        return this.myInstance;
    }
}
exports.default = Games;
