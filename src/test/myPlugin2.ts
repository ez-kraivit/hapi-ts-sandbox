export const myPlugin2 = {
    name: 'myPlugin2',
    version: '1.0.0',
    register: async function (_server:any,_options:any){
        console.log('Plugin 2 Import Success!');
        await _server.dependency(['myPlugin1','myPlugin3'],async(srv:any)=>{
            console.log(srv.app);
        })
    }
}
