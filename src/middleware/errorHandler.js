const { ValidationError } = require('express-joi-validation');

const errorHandler = (err, req, res, next) => {
    if (err instanceof ValidationError) {
        return res.status(400).json({
            error: 'Validation Error',
            details: err.details,
        });
    }

    return res.status(500).json({
        error: 'Internal Server Error',
        message: err.message,
    });
};

module.exports = errorHandler;