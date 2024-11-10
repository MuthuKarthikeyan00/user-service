class Constants {
    static getSuccessfulHttpStatusCode() {
        return [Constants.HTTP_STATUS_CODE_OK, Constants.HTTP_STATUS_CODE_CREATED];
    }
    static getClientErrorHttpStatusCodes() {
        return [Constants.HTTP_STATUS_CODE_BAD_REQUEST, Constants.HTTP_STATUS_CODE_UNAUTHORIZED, Constants.HTTP_STATUS_CODE_FORBIDDEN, Constants.HTTP_STATUS_CODE_NOT_FOUND];
    }
    static getServerErrorHttpStatusCodes() {
        return [Constants.HTTP_STATUS_CODE_INTERNAL_SERVER_ERROR];
    }
    static getHttpStatusCodeMessage(code) {
        var _a;
        const statusCode = {
            200: 'success',
            201: 'created',
            400: 'Client Side Error',
            401: 'Unauthorized',
            403: 'Forbidden',
            404: 'Resource not found',
            500: 'Something went wrong.Please try again'
        };
        return (_a = statusCode === null || statusCode === void 0 ? void 0 : statusCode[code]) !== null && _a !== void 0 ? _a : '';
    }
    static getPrismaErrorMessageByErrorCode(code, error) {
        var _a, _b, _c, _d;
        const prismaErrorMessages = {
            'P2000': `The value you provided is too long. Please shorten it.`,
            'P2001': `The requested record does not exist. Please check your input.`,
            'P2002': `The value for the field "${(_a = error.meta) === null || _a === void 0 ? void 0 : _a.target}" must be unique.`,
            'P2003': `There was a problem with the related field "${(_b = error.meta) === null || _b === void 0 ? void 0 : _b.field_name}". Please check the relationship.`,
            'P2004': `A database constraint was violated. Please review the details.`,
            'P2005': `The value for the field is invalid. Please check the input.`,
            'P2006': `The value provided for this field is not valid. Please correct it.`,
            'P2007': `There was a data validation error. Please verify the data.`,
            'P2008': `The query could not be parsed. Please check your syntax.`,
            'P2009': `The query could not be validated. Please review it.`,
            'P2010': `There was an issue with the raw query. Check the message: ${(_c = error.meta) === null || _c === void 0 ? void 0 : _c.message}`,
            'P2011': `A required field cannot be null. Please provide a value.`,
            'P2012': `A required value is missing. Please fill in all necessary fields.`,
            'P2013': `A required argument for the field is missing. Please check your request.`,
            'P2014': `This change violates a required relationship between models. Please review your data.`,
            'P2015': `Could not find a related record. Please ensure all related data is present.`,
            'P2016': `There was an error interpreting the query. Please check your syntax.`,
            'P2017': `The records for this relation are not connected. Please verify the relationships.`,
            'P2018': `Required connected records were not found. Please ensure all related records are provided.`,
            'P2019': `There was an input error. Please check the data you provided.`,
            'P2020': `The value provided is out of range. Please check your input.`,
            'P2021': `The specified table does not exist in the current database. Please verify the table name.`,
            'P2022': `The specified column does not exist in the current database. Please check your column name.`,
            'P2023': `The column data is inconsistent. Please review the data for this column.`,
            'P2024': `Timed out trying to fetch a new connection. Please try again later.`,
            'P2025': `An operation failed because required records were not found. Please check your data.`,
            'P2026': `The current database provider doesn't support a feature used in your query. Please review your query.`,
            'P2027': `Multiple errors occurred during query execution. Please check the database for details.`,
            'P2028': `There was an error with the transaction API. Please try again.`,
            'P2030': `Could not find a fulltext index for the search. Please verify the index exists.`,
            'P2031': `Migration failed to apply cleanly. Please check the migration process.`,
            'P2032': `Could not find a migration that has already been applied. Please review your migrations.`,
        };
        // Retrieve the message, if applicable, replacing field names as needed
        let message = (_d = prismaErrorMessages[String(code)]) !== null && _d !== void 0 ? _d : 'An unknown error occurred. Please try again.';
        // Replace field placeholders with actual values from error.meta if available
        if (error.meta) {
            for (const [key, value] of Object.entries(error.meta)) {
                message = message.replace(`{${key}}`, value);
            }
        }
        return message;
    }
    static getHttpStatusCodeByPrismaErrorCode(code) {
        var _a;
        const prismaErrorStatusCodes = {
            'P2000': 400, // Bad Request
            'P2001': 404, // Not Found
            'P2002': 409, // Conflict
            'P2003': 400, // Bad Request
            'P2004': 400, // Bad Request
            'P2005': 400, // Bad Request
            'P2006': 400, // Bad Request
            'P2007': 400, // Bad Request
            'P2008': 400, // Bad Request
            'P2009': 400, // Bad Request
            'P2010': 400, // Bad Request
            'P2011': 400, // Bad Request
            'P2012': 400, // Bad Request
            'P2013': 400, // Bad Request
            'P2014': 400, // Bad Request
            'P2015': 404, // Not Found
            'P2016': 400, // Bad Request
            'P2017': 400, // Bad Request
            'P2018': 404, // Not Found
            'P2019': 400, // Bad Request
            'P2020': 400, // Bad Request
            'P2021': 404, // Not Found
            'P2022': 404, // Not Found
            'P2023': 400, // Bad Request
            'P2024': 504, // Gateway Timeout
            'P2025': 404, // Not Found
            'P2026': 400, // Bad Request
            'P2027': 500, // Internal Server Error
            'P2028': 500, // Internal Server Error
            'P2030': 400, // Bad Request
            'P2031': 500, // Internal Server Error
            'P2032': 400, // Bad Request
        };
        return (_a = prismaErrorStatusCodes[String(code)]) !== null && _a !== void 0 ? _a : 500; // Default to Internal Server Error
    }
}
Constants.HTTP_STATUS_CODE_OK = 200;
Constants.HTTP_STATUS_CODE_CREATED = 201;
Constants.HTTP_STATUS_CODE_BAD_REQUEST = 400;
Constants.HTTP_STATUS_CODE_UNAUTHORIZED = 401;
Constants.HTTP_STATUS_CODE_FORBIDDEN = 403;
Constants.HTTP_STATUS_CODE_NOT_FOUND = 404;
Constants.HTTP_STATUS_CODE_INTERNAL_SERVER_ERROR = 500;
export default Constants;
