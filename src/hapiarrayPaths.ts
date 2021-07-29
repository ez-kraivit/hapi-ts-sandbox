import * as Glob from 'glob'
const hapiarrayPathsRouter: Array<string> = Glob.sync('./src/plugins/routers/**/*.@(js|ts)')
const hapiarrayPathsControlelr: Array<string> = Glob.sync('./src/plugins/controllers/**/*.@(js|ts)')
Array.prototype.push.apply(hapiarrayPathsRouter,hapiarrayPathsControlelr)
export default hapiarrayPathsRouter.map((ts:string) => require(`.${ts}`))
