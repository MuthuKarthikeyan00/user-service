"use strict";
// import Constants from "@src/helpers/constants";
// import ResponseHandler from "@src/helpers/ResponseHandler";
// import Sanitizer from "@src/helpers/Sanitizer";
// import Utils from "@src/helpers/Utils";
// import Validator from "@src/validator/Validator";
// import { NextFunction, Request, Response } from "express";
// import { Prisma } from '../../prisma/user-client';
// import { userTypeValidationSchema } from "@src/validator/schema";
// import UserRoleModel from "@src/models/UserRole";
// type CreateInputParams = Prisma.UserCreateManyCompanyBranchInput;
// export default class Role {
//     private static async handleData(body: any): Promise<CreateInputParams> {
//         return Sanitizer.sanitizeHtml({
//             name: String(body.name),
//             description: String(body.description),
//         });
//     }
//     public static async create(req: Request, res: Response) {
//         try {
//             const body = req.body;
//             const params = await Role.handleData(body);
//             params.created_by = 1;
//             params.created_at = new Date();
//             const data = await UserRoleModel.create(params);
//             if (Utils.isGraterthenZero(data.id)) return ResponseHandler.success(res, Constants.HTTP_STATUS_CODE_CREATED, data);
//             return ResponseHandler.error(res);
//         } catch (error) {
//             return ResponseHandler.error(res,error);
//         }
//     }
//     public static async update(req: Request, res: Response) {
//         try {
//             const body = req.body;
//             const id = Number(req.params.id);
//             if (!Utils.isGraterthenZero(id)) {
//                 return ResponseHandler.error(
//                     res,{},
//                     Constants.HTTP_STATUS_CODE_NOT_FOUND,
//                     "invalid id"
//                 );
//             }
//             const params = await Role.handleData(body);
//             params.updated_at = new Date();
//             params.updated_by = 1
//             const data = await UserRoleModel.update(id, params);
//             if (data.id > 0) return ResponseHandler.success(res, Constants.HTTP_STATUS_CODE_OK, data, 'User updated');
//             return ResponseHandler.error(res);
//         } catch (error) {
//            return ResponseHandler.error(res,error);
//         }
//     }
//     public static async validate(req: Request, res: Response, next: NextFunction) {
//         try {
//             const status = await Validator.validate(req.body, userTypeValidationSchema, res)
//             if (status) return next();
//         } catch (error) {
//            return ResponseHandler.error(res, error,Constants.HTTP_STATUS_CODE_INTERNAL_SERVER_ERROR, 'Validation failed');
//         }
//     }
// }
