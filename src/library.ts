import app from "./app";
// const logger = require("./configurations/logger");
const port: number = parseInt(process.env.APP_PORT || "3001", 10);

app.listen(port, ()=>{
    // logger.info(`Server is up on port ${port}`);
    console.log(`Server is up on port ${port}`);
})