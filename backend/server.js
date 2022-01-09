
const app = require('./app');
 const dotenv= require('dotenv');
const path = require('path');
const connectDatabase =require('./config/database')

//HandlingUncaughtExpection
// console.log(youtube);
process.on("uncaughtException",(err)=>{
    console.log(`Error  ${err}`);
    console.log("shutting down the server due to handlingUncaughteExpection ");
        process.exit(1);
})
//config
dotenv.config({path:"backend/config/config.env"})

connectDatabase();
const server=app.listen(process.env.port,()=>{
    console.log(`Port is listen runing at http://localhost:${process.env.port}`)
});

//unhandled promise rejection
process.on("unhandledRejection", (err)=>{
    console.log(`Error  ${err}`);
console.log("shutting down the server due to unhandle promise rejection");
server.close(()=>{
    process.exit(1);
});

})