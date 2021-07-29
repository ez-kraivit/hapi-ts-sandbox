export const myPlugin3 = {
    name: 'myPlugin3',
    version: '1.0.0',
    register: async function (server:any,_options:any){
        server.app.k2 = '3'
        console.log('Plugin 3 Import Success!');

    }
}

