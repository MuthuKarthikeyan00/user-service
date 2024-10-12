import Constants from "@src/helpers/constants";
import ResponseHandler from "@src/helpers/ResponseHandler";
import Sanitizer from "@src/helpers/Sanitizer";
import Utils from "@src/helpers/Utils";
import UserModel from "@src/models/User";
import Validator from "@src/validator/Validator";
import { NextFunction, Request, Response } from "express";
import {  Prisma } from '../../prisma/user-client';
import { userValidationSchema } from "@src/validator/schema";
import Encryption from "@src/helpers/Encryption";

type CreateInputParams = Prisma.UserCreateInput;


export default class User {


    private static async handleData(body: any): Promise<CreateInputParams> {

        return Sanitizer.sanitizeHtml({
            name: String(body.name),
            display_name: String(body.display_name),
            profile: String(body.profile),
            email: String(body.email),
            password: String(body.password),
            permanent_address: String(body.permanent_address),
            current_address: String(body.current_address),
            city: String(body.city),
            phone:  Utils.convertTONumber(body.phone),
            role_id:  Utils.convertTONumber(body.role_id),
            postcode:  Utils.convertTONumber(body.postcode),
            country:  Utils.convertTONumber(body.country),
            state:  Utils.convertTONumber(body.state),
        });
    }

    public static async create(req: Request, res: Response) {

        try {
            const body = req.body;
            const params = await User.handleData(body);

            params.created_by = 3;
            params.password = await Encryption.hashPassword(params.password , params.email);

            const data = await UserModel.create(params);
            if (Utils.isGraterthenZero(data.id)) return ResponseHandler.success(res, Constants.HTTP_STATUS_CODE_CREATED);
            return ResponseHandler.error(res);

        } catch (error) {
            return ResponseHandler.error(res,error);
        }

    }

    public static async update(req: Request, res: Response) {
        try {
            const body = req.body;
            const id = Number(req.params.id);
        
            if (!Utils.isGraterthenZero(id)) {
                return ResponseHandler.error(
                    res,{},
                    Constants.HTTP_STATUS_CODE_NOT_FOUND,
                    "invalid id"
                );
            }

            const params = await User.handleData(body);
            params.updated_at = new Date().toISOString();
            params.updated_by = 1
            params.password = await Encryption.hashPassword(params.password , params.email);

            const data = await UserModel.update(id, params);
            if (data.id > 0) return ResponseHandler.success(res, Constants.HTTP_STATUS_CODE_OK, data, 'User updated');

            return ResponseHandler.error(res);
        } catch (error) {
            return ResponseHandler.error(res,error);
        }
    }



    public static async validate(req: Request, res: Response, next: NextFunction) {
        try {
            const status = await Validator.validate(req.body, userValidationSchema, res)
            if (status) return next();
        } catch (error) {
            return ResponseHandler.error(res,error, Constants.HTTP_STATUS_CODE_INTERNAL_SERVER_ERROR, 'Validation failed');
        }

    }

}