import { SO } from '../../datatypes/mapperInterface'
exports.plugin = {
    name:"Demo",
    once:true,
    register: (_server:SO,_options:SO) => {
        _server.route([
            {
                path:'/demo',
                method:["GET"],
                handler:(_requeest:SO,_h:SO)=>{                    
                    return 'Hello'
                }
            }
        ])

    }
}