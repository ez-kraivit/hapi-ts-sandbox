import { SO } from '../../datatypes/mapperInterface'
import { Server } from "@hapi/hapi";
exports.plugin = {
    name:"DemoRouter",
    once:true,
    register: (_server:Server | SO,_options:SO) => {
        _server.route([
            {
                path:'/demo',
                method:["GET"],
                handler:(_requeest:SO,_h:SO)=>{ 
                    return new _server.app.DemoController().getHello()
                }
            }
        ])

    }
}
