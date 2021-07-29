import { CronJob } from "cron";

export type CronJobFunction = () => void;

export interface CronJobObject<cronTime, doWhat> {
  time: string;
  timezone: string;
  job: CronJobFunction;
}

export default class RegisterCronJob {
  constructor() {
  }

  static doJob (cronTime: string, doWhat: CronJobFunction) {
    const job: CronJob = new CronJob(cronTime, doWhat, null, true, "Asia/Bangkok");
    job.start();
  }

  static registerCronJob (jobList: Array<CronJobObject<string, CronJobFunction>> = []) {
    if (!jobList || jobList.length == 0) return null;
    jobList.forEach((job) => this.doJob(job.time, job.job));
  }
}