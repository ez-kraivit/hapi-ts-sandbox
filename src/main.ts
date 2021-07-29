import { init, start , connectStart } from "./server";
connectStart().then(()=> init().then(() => start()))