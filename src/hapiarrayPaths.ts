import * as Glob from 'glob'
const hapiarrayPathsRouter: Array<string> = Glob.sync('./src/plugins/routers/**/*.@(js|ts)')
console.log(hapiarrayPathsRouter);

export default hapiarrayPathsRouter.map((ts:string) => require(`.${ts}`))
