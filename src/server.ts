import * as Hapi from '@hapi/hapi';
import { Server } from "@hapi/hapi";
import { SO } from './datatypes/mapperInterface'
import { hapiRegister } from './coreplugins/hapiRegister'
import { hapiApp } from './coreplugins/hapiApp'

export let server: Server | any ;

export const init =  async function(_options?:SO): Promise<Server> {
    
    server = new Hapi.Server({
        port:5070
    })

    await hapiRegister(server)
    await hapiApp(server)

    return server
}

export const start = async function (): Promise<void>{
    console.info(`Server runing on ${server.info.port}`);
    await server.start();
}