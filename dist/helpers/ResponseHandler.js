import Constants from './constants';
import { PrismaClientKnownRequestError } from '../../prisma/user-client/runtime/library';
import JSONbig from 'json-bigint';
export default class ResponseHandler {
    static success(res, code = Constants.HTTP_STATUS_CODE_OK, data = {}, message = '') {
        code = Constants.getSuccessfulHttpStatusCode().includes(code) ? code : Constants.HTTP_STATUS_CODE_OK;
        message = message || Constants.getHttpStatusCodeMessage(code);
        data = data || [];
        res.status(code);
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSONbig.stringify({ success: true, message, data }));
    }
    static error(res, error = {}, code = Constants.HTTP_STATUS_CODE_INTERNAL_SERVER_ERROR, message = '') {
        console.log({ error: error });
        code = Constants.getClientErrorHttpStatusCodes().includes(code) ? code : Constants.HTTP_STATUS_CODE_INTERNAL_SERVER_ERROR;
        message = message || Constants.getHttpStatusCodeMessage(code);
        if (error instanceof PrismaClientKnownRequestError) {
            code = Constants.getHttpStatusCodeByPrismaErrorCode(error.code);
            message = Constants.getPrismaErrorMessageByErrorCode(error.code, error);
        }
        return res.status(code).json({
            status: code,
            message,
            error
        });
    }
}
