import initServer from './server';
const init = async function (): Promise<void>{
    let server = await initServer();
    await server.start();
    console.info(`Server runing on ${server.info.port}`);
}
init()