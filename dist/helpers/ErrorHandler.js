class ErrorHandler extends Error {
    constructor(message, statusCode = 500) {
        super(message);
        this.statusCode = statusCode;
        // Set the prototype explicitly for extending built-in classes in TypeScript
        Object.setPrototypeOf(this, ErrorHandler.prototype);
    }
    static handleZodError(error) {
        const message = error.errors.map(err => err.message).join(', ');
        return new ErrorHandler(message, 400);
    }
    static handleGenericError(error) {
        return new ErrorHandler(error.message, 500);
    }
    static createError(error = 'Something went wrong') {
        return new ErrorHandler(error, 500);
    }
}
export default ErrorHandler;
