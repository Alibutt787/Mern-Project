const ErrorHandler =require('../utils/errorhandler');

module.exports=(err,req,res,next)=>{
    err.statusCode=err.statusCode || 500;
    err.statusCode=err.statusCode || "Internal Server ERROR";

    // MonogoDB Error

if(err.name==="CastError"){
    const message = `Resource Not Found. Invalid: ${err.path}`;
    err = new ErrorHandler(message,400)
}


    res.status(err.statusCode).json({
        success:false,
        err:err.message
    })
}

