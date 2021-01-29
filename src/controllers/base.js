class Base {

    getSuccessResponse(msg, details) {
        return {
            message: msg,
            status: 'success',
            data: details,
        };
    };

    getErrorResponse(msg, details) {
        return {
            message: msg,
            status: 'error',
            data: details,
        };
    };

};


module.exports = Base;