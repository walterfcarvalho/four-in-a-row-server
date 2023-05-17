import MySingeton from '../../Games'

module.exports =  (app: { get: (arg0: string, arg1: (req: any, res: any) => void) => void; }) => {
  
  app.get( "/four-in-a-row/new", (
    req: { ip: string; }, 
    res:  { status: (arg0: number) => void; 
            setHeader: (arg0: string, arg1: string) => void; 
            send: (arg0: any) => void; 
          }
  ) => {
    
    const Games = MySingeton.instance()
    const newGameData = Games.newGame(req.ip);

    res.status(200);
    res.setHeader("Content-Type", "application/json");
    res.send(newGameData);
  })
}
