import { erroMsg } from "../const";

export const setResObj = (res:any, msg:string) => 
  res.status(404).send(erroMsg.get(msg))
