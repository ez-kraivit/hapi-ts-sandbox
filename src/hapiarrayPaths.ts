import * as Glob from 'glob'
const hapiarrayPaths: Array<string> = Glob.sync("./src/plugins/routers/**/*.js")
export default hapiarrayPaths.map((ts:string) => require(`.${ts}`))
