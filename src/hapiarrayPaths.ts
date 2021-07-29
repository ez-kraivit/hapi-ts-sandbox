import * as Glob from 'glob'
import { GetCronJob } from './plugins/cronjobs/CallCronJob'
import CronJobModel from './coreplugins/conJob'
const hapiarrayPathsRouter: Array<string> = Glob.sync('./src/plugins/routes/**/*.@(js|ts)')
const hapiarrayPathsControlelr: Array<string> = Glob.sync('./src/plugins/controllers/**/*.@(js|ts)')
Array.prototype.push.apply(hapiarrayPathsRouter,hapiarrayPathsControlelr)
export default hapiarrayPathsRouter.map((ts:string) => require(`.${ts}`))

export const afterRegister = async function():Promise<void>{    
    CronJobModel.registerCronJob(GetCronJob())
}