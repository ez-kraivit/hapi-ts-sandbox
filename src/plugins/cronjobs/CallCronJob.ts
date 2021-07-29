export const GetCronJob = () => {
    return {
        time: "1 * * * * *",
        timezone: "Asia/Bangkok",
        job: async () => {
            console.log('Hello JobCron')
        }
    }
}