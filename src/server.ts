import * as Hapi from '@hapi/hapi';
import { Server } from "@hapi/hapi";
import { SO } from './interface/mainInterface'
import { hapiRegister } from './coreplugins/hapiRegister'
import { hapiApp } from './coreplugins/hapiApp'
import { createConnection } from "typeorm"
import { Users } from './migration/index';
export let server: Server | any;

export const init = async function (_options?: SO): Promise<Server> {

    server = new Hapi.Server({
        port: 5070
    })

    await hapiRegister(server)
    await hapiApp(server)
    return server
}

export const connectStart = async function():Promise<void>{
    createConnection({
        type: "postgres",
        host: "0.0.0.0",
        port: 5432,
        username: "root",
        password: "12345678",
        database: "we",
        entities: [
            Users
        ],
        synchronize: true, // { force: true = true }
        logging: false
    })
}

export const start = async function (): Promise<void> {
    console.info(`Server runing on ${server.info.port}`);
    await server.start();
}