import * as Hapi from '@hapi/hapi';
import { SO } from './DataType/mapper'
import hapiarrayPaths from './hapiarrayPaths'

const initServer = async(_options?:SO) => {
    const server:SO = new Hapi.Server({
        port:5070
    }) 
    await server.register(hapiarrayPaths);
    return server
}

export default initServer

