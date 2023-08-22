/* const { StatusCodes } = require("http-status-codes")

const errorHandler = (err, req, res, next) => {
    let errorObject = {
        name: err.name || "Something went wrong",
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
    }

    if (err.name = "ValidationError") {
        errorObject.name = "Validation Error"

    }
    
    res.status(400).json(errorObject)
}

module.exports = errorHandler */