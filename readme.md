# Four-in-a-row
 >Four in a Row (also known as Connect 4, Four Up,  Captain's Mistress, connect four, Drop Four, etc) is a two-player connection rack game, in which the players choose a color and then take turns dropping colored tokens into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the lowest available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own tokens. Connect Four is a solved game. The first player can always win by playing the right moves.
https://www.wikiwand.com/en/Connect_Four


As an asynchronous game,  it requests two modules to work, a **frontend part** and one backend to connect two players and control game flow.
This is the **backend part**, and did by using node.js with Tpyescript.   


### Routes <hr/>
  There is three routes to control a game: 
  >**/four-in-a-row/new**: [get] this is a endpoint to initiate one game, it returns a json object with a follow data:
  
  ````JSON
  {
    "uuid": string, /* ID to Identify a game */
    "turn": undefined , /* Used to identify a turn */
    "pOneIp": string , /* Used to identify the player one */
    "pOneTwo": string , /* Used to identify the player two */
    "winner": undefined , /* Used to identify who won a game */

  }
  ````

  + uuid: string 
  +  turn:  1 | 2 | undefined
  + winner: 1 | 2| undefined
  + pOneIp: string | undefined
  + pTwoIp: string | undefined
  + lastAct: string | undefined
  + board: IRow []

```typescript
{ "some": "json" }
```



  
  >/four-in-a-row/join,
  
  >/four-in-a-row/move,




### References
  Singleton node:
https://dev.to/talr98/singleton-design-pattern-use-case-with-node-js-typescript-express-js-5ebb
