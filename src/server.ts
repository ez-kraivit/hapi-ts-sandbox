import * as Hapi from '@hapi/hapi';
import { SO } from './datatypes/mapperInterface'
import hapiarrayPaths from './hapiarrayPaths'

const initServer = async(_options?:SO) => {
    const server = new Hapi.Server({
        port:5070
    }) 
    await server.register(hapiarrayPaths);
    return server
}

export default initServer

