import Constants from "@src/helpers/constants";
import ResponseHandler from "@src/helpers/ResponseHandler";
import Sanitizer from "@src/helpers/Sanitizer";
import Utils from "@src/helpers/Utils";
import Validator from "@src/validator/Validator";
import { NextFunction, Request, Response } from "express";

import { logInValidationSchema } from "@src/validator/schema";
import UserModel from "@src/models/User";
import Encryption from "@src/helpers/Encryption";
import jwt from "jsonwebtoken";
import { Prisma , PrismaClient } from "../../prisma/user-client";
import LoginLog from "./LoginLog";
import UserLoginLogModel from "@src/models/UserLoginLog";
import Context from "@src/asyncLocalStorage/Context";
import { UserSessionType } from "@src/types/types";

type CreateInputParams = Prisma.UserCreateInput;




export default class Auth {


    private static async handleData(body: any): Promise<CreateInputParams> {
        return Sanitizer.sanitizeHtml({
            email: String(body.email),
            password: String(body.password),
        });
    }


    public static async logIn(req: Request, res: Response) {
        try {       
            const body = req.body;
            const params = await Auth.handleData(body);
            const validUser = await UserModel.getByEmail(params.email);

            if(!validUser || ! await Encryption.comparePassword(params.password, validUser.email,  validUser.password)){
                return ResponseHandler.error(res, {}, Constants.HTTP_STATUS_CODE_UNAUTHORIZED, 'email and password mismatch');
            }

            if (Utils.isGraterthenZero(validUser?.id)){
                const payloadData = {
                    user_id: Utils.convertTONumber(validUser.id),
                    role_id: Utils.convertTONumber(validUser.role_id),
                    company_id: Utils.convertTONumber(validUser.company_id),
                    company_branch_id: Utils.convertTONumber( validUser.company_branch_id),
                };

                const token = Auth.jwtSign(payloadData)  
                const macAddress = req.headers.mac_address;
                const loginLog = await LoginLog.create( { user_id: validUser.id,  mac_address : macAddress , status : 1, system_info: { user_agent: req.headers['user-agent'] , ip_address : req.ip } });
                if (!Utils.isGraterthenZero(loginLog?.id)) return ResponseHandler.error(res);
                return ResponseHandler.success(res,Constants.HTTP_STATUS_CODE_OK,{
                    access_token: `Bearer ${token}`,
                }, 'User logged in successfully');
               
            }
            return ResponseHandler.error(res, {}, Constants.HTTP_STATUS_CODE_UNAUTHORIZED, 'email and password mismatch');

        } catch (error) {
            return ResponseHandler.error(res,error);
        }
    }

    public static async logOut(req: Request, res: Response) {
        try {    
            
            // console.log(req.user);

            const body = req.body;
            const user_id = Utils.convertTONumber(body.user_id);
            const macAddress = req.headers.mac_address;

            const loginLog = await LoginLog.create( { user_id,  mac_address : macAddress , status : 1, system_info: { user_agent: req.headers['user-agent'] , ip_address : req.ip } });

            if (!Utils.isGraterthenZero(loginLog?.id)) return ResponseHandler.error(res);
            return ResponseHandler.success(res,Constants.HTTP_STATUS_CODE_OK,{}, 'User logout in successfully');


        } catch (error) {
            return ResponseHandler.error(res,error);
        }
    }



    public static async create(req: Request, res: Response) {

        try {
            const body = req.body;
            const params = await Auth.handleData(body);

            params.created_by = 1;
            params.created_at = new Date();
            const data = await UserModel.create(params);
            if (Utils.isGraterthenZero(data.id)) return ResponseHandler.success(res, Constants.HTTP_STATUS_CODE_CREATED, data);
            return ResponseHandler.error(res);

        } catch (error) {
            return ResponseHandler.error(res,error);
        }

    }


    public static async validate(req: Request, res: Response, next: NextFunction) {
        try {
            const status = await Validator.validate(req.body, logInValidationSchema, res)
            if (status) return next();
        } catch (error) {
           return ResponseHandler.error(res, error,Constants.HTTP_STATUS_CODE_INTERNAL_SERVER_ERROR, 'Validation failed');
        }

    }

    public static jwtSign(payload:any) {

        return jwt.sign(payload, "7e86472d-a6d1-4365-9eb7-6b5917ae318f", {
            expiresIn: "1d",
        });

        
    }

    public static async jwtVerify(req : Request, res : Response, next : NextFunction) {
        const authHeader = req.headers.authorization;
        const macAddress = req.headers.mac_address;
        if (!authHeader) {
            return ResponseHandler.error(res, {},Constants.HTTP_STATUS_CODE_UNAUTHORIZED);        
        }
    
        const token = authHeader.split(" ")[1];
    
        var userData : UserSessionType 
        // Verify the JWT token
        jwt.verify(token, "7e86472d-a6d1-4365-9eb7-6b5917ae318f", (err, user: any) => {
            if (err) {
                return ResponseHandler.error(res, err,Constants.HTTP_STATUS_CODE_UNAUTHORIZED);
            }
            userData = user;
        });

        // f(Utils.isGraterthenZero(userData?.id) req
        // console.log(userData);
        


        // const user = await UserLoginLogModel.getByUserId(userData.user_id);
        // if(Utils.isGraterthenZero(userData?.id) && macAddress === String(userData?.mac_address)){
        //     Context.store(req.user);
        //     return  next();
        // }



        return ResponseHandler.error(res, {},Constants.HTTP_STATUS_CODE_NOT_FOUND, 'session expired');
    };

}