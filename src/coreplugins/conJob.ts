import { CronJob } from 'cron'

type CronJobFunc = any 
interface CronJobOption {
  time:string;
  timezone?:string
  job:CronJobFunc
}

class CronJobModel {

  static cronJob: CronJob

  static doJob(cronTime: string, CronJobFunc: CronJobFunc) {    
    this.cronJob = new CronJob(cronTime, CronJobFunc);    
    if (!this.cronJob.running) {
      this.cronJob.start();
    }
  }

  static registerCronJob(jobList: CronJobOption) {
    this.doJob(jobList.time, jobList.job)
  }
}

export default CronJobModel