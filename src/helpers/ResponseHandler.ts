import  {  Response } from 'express';
import Constants from './constants';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
export default class ResponseHandler {

    public static success(res: Response, code : number = Constants.HTTP_STATUS_CODE_OK, data: any = {},message: string='') : Response {

        code = Constants.getSuccessfulHttpStatusCode().includes(code) ? code : Constants.HTTP_STATUS_CODE_OK ;
        message =  message || Constants.getHttpStatusCodeMessage(code);
        data = data || [];

        return res.status(code).json({
            status: code,
            message ,
            data
        });
    }

    public static error (res: Response, error:any = {} ,code : number = Constants.HTTP_STATUS_CODE_INTERNAL_SERVER_ERROR ,message: string = '' ) {

        console.log({error : error});

        code = Constants.getClientErrorHttpStatusCodes().includes(code) ? code : Constants.HTTP_STATUS_CODE_INTERNAL_SERVER_ERROR ;
        message = message || Constants.getHttpStatusCodeMessage(code);

        if (error instanceof PrismaClientKnownRequestError) {
            code = Constants.getHttpStatusCodeByPrismaErrorCode(error.code); 
            message = Constants.getPrismaErrorMessageByErrorCode(error.code,error);
        }

        return res.status(code).json({
            status: code,
            message ,
            error
        });
    }



}