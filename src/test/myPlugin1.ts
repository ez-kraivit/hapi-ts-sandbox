export const myPlugin1 = {
    name: 'myPlugin1',
    version: '1.0.0',
    register: async function (server:any,_options:any){
        server.app.k1 = '1'
        console.log('Plugin 1 Import Success!');
    }
}

