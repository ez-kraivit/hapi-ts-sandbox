import { Server } from "@hapi/hapi";
import hapiarrayPaths from '../hapiarrayPaths'
export const hapiRegister =  async function(_server:any): Promise<Server> { 
    await _server.register(hapiarrayPaths)
    return _server
}