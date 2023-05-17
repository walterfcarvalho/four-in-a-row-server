
export const myEmptyGrid: IRow[] = [
  { c: [{ v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 1 }] },
  { c: [{ v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 1 }, { v: 0 }] },
  { c: [{ v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 1 }, { v: 0 }, { v: 0 }] },
  { c: [{ v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }] },
  { c: [{ v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }] },
  { c: [{ v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }] }
]

export const newGameData: IGame = {
  uuid: "",
  turn: undefined,
  winner: undefined,
  pOneIp: undefined,
  pTwoIp: undefined,
  lastAct: undefined,
  board: myEmptyGrid,
};

export const erroMsg = new Map<string, IMsgError>([
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
])

//module.exports = { newGameData, myEmptyGrid, erroMsg };
