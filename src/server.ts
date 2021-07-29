import * as Hapi from '@hapi/hapi';
import { Server } from "@hapi/hapi";
import { SO } from './datatypes/mapperInterface'
import hapiarrayPaths from './hapiarrayPaths'
export let server: Server;

export const init =  async function(_options?:SO): Promise<Server> {
    server = new Hapi.Server({
        port:5070
    }) 
    await server.register(hapiarrayPaths);
    return server
}

export const start = async function (): Promise<void>{
    console.info(`Server runing on ${server.info.port}`);
    await server.start();
}