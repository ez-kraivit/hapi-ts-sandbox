import { Server } from "@hapi/hapi";
export const hapiApp =  async function(_server:any): Promise<Server> { 
    _server.app._k1 = 'kraivit mongkhonsakunrit'
    return _server
}