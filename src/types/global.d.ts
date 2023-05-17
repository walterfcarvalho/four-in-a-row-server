export { };

declare global {

  interface ICell {
    v:number
  }
  
  interface IRow  {
    c: ICell[]
  }
  
  interface IGame {
    uuid: string
    turn:  1 | 2 | undefined
    winner: 1 | 2| undefined
    pOneIp: string | undefined
    pTwoIp: string | undefined
    lastAct: string | undefined
    board: IRow []
  }

  interface IMsgError {
    code: number;
    message: string
  }
  
  interface IGameMove  {
    uuid:string
    turn: 1 | 2 | undefined
    row:number
    col:number
  }
}
