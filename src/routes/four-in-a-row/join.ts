import { setResObj } from "../../utils/setResObj"
import Games from '../../Games'
const games = Games.instance()

module.exports = function (app: { post: (arg0: string, arg1: (req: any, res: any) => void) => void; }) {
  
  app.post("/four-in-a-row/join", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    
    let uuid = req.body.uuid;

    let gameObj = games.get(uuid);

    if ( gameObj == undefined ) {
      setResObj(res, 'gameNotExists' )
      return
    }
        
    if ( gameObj.pTwoIp != undefined ) {
      setResObj(res, 'alreadyHasTwoPlayes' )
      return
    }
    
    gameObj = games.joinP2(uuid, req.ip );

    res.status(200);
    res.send(gameObj);
  })
}
