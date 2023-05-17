import { setResObj } from "../../utils/setResObj"
import Games from '../../Games'
const games = Games.instance()

module.exports = function (app: { post: (arg0: string, arg1: (req: any, res: any) => void) => void; }) {
  
  app.post("/four-in-a-row/move", (req, res) => {
    res.setHeader("Content-Type", "application/json");

    let act = req.body;
    let gameObj = games.get(act.uuid);

    if ( gameObj == undefined ) {
      setResObj(res, 'gameNotExists' )
      return
    }

    if ( gameObj == undefined || gameObj.turn !== act.turn ) {
      setResObj(res, 'aintYourTurn' )
      return
    }

    games.setAct(act)
    
    res.status(200);
    res.send(gameObj);
  })
}
