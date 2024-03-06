const constants = require('../constants')
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode || 500;

    switch (statusCode) {
        case constants.VALIDATION_FAILED:
            res.json({
                title: "Validation Failed",
                message: err.message,
                stackTrace: err.stack
            })

        case constants.UNAUTHORIZED:
            res.json({
                title: "Unauthorized",
                message: err.message,
                stack: err.stack
            });

        case constants.FORBIDDEN:
            res.json({
                title: "Forbidden",
                message: err.message,
                stack: err.stack
            });

        case constants.NOT_FOUND:
            res.json({
                title: "Not found",
                message: err.message,
                stack: err.stack
            });

        case constants.SERVER_ERROR:
            res.json({
                title: "Server Error",
                message: err.message,
                stack: err.stack
            });

        default:
            console.log("All good !No Error")
    }

};

module.exports = errorHandler;