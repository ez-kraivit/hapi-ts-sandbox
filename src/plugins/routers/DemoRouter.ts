import { SO } from '../../datatypes/mapperInterface'
exports.plugin = {
    name:"DemoRouter",
    once:true,
    register: (_server:SO,_options:SO) => {
        _server.route([
            {
                path:'/demo',
                method:["GET"],
                handler:(_requeest:SO,_h:SO)=>{    
                    console.log(_server.app._k1);
                    return 'Hello'
                }
            }
        ])

    }
}