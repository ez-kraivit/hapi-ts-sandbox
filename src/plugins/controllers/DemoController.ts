import { SO } from '../../interface/mainInterface'
import { Server } from "@hapi/hapi";
exports.plugin = {
    name:"DemoController",
    once:true,
    register: (_server:Server | SO,_options:SO) => {
        _server.app.DemoController = class DemoController {
            public async getHello() {
                return 'Kraivit Mongkhonsakunrit'
            }
        }

    }
}