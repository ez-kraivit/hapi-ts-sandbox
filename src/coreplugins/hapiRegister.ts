import { Server } from "@hapi/hapi";
import hapiarrayPaths , { afterRegister } from '../hapiarrayPaths'
export const hapiRegister =  async function(_server:any): Promise<Server> { 
    await _server.register(hapiarrayPaths).then(()=>afterRegister())
    return _server
}