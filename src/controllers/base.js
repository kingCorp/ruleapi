class Base {
  constructor() {
    this.success = 'success';
    this.error = 'error';
  }

  getSuccessResponse(msg, details) {
    return {
      message: msg,
      status: this.success,
      data: details,
    };
  }

  getErrorResponse(msg, details) {
    return {
      message: msg,
      status: this.error,
      data: details,
    };
  }
}

module.exports = Base;
