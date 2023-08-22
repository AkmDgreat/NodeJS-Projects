/* const { StatusCodes } = require("http-status-codes")

const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err)
    if (err.name == "ValidationError") {
        res.status(StatusCodes.BAD_REQUEST).json({
            error: err.message
        })
    }
    next(err)
}

module.exports = errorHandlerMiddleware */

const { StatusCodes } = require("http-status-codes")

const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err)
    let errorObject = {
        name: err.name || "Something went wrong",
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
    }

    if (err.name == "ValidationError") {
        errorObject.name = "Validation Error"
        errorObject.statusCode = StatusCodes.BAD_REQUEST
    }
    
    res.status(400).json(errorObject)
}

module.exports = errorHandlerMiddleware
