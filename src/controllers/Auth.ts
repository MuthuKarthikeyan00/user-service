// import Constants from "@src/helpers/constants";
// import ResponseHandler from "@src/helpers/ResponseHandler";
// import Sanitizer from "@src/helpers/Sanitizer";
// import Utils from "@src/helpers/Utils";
// import Validator from "@src/validator/Validator";
// import { NextFunction, Request, Response } from "express";

// export default class Auth {


//     private static async handleData(body: any, res: Response) {

//         return Sanitizer.sanitizeHtml({
//             name: body.name,
//             description: body.description,
//         });

//     }



//     public static async logIn(req: Request, res: Response) {


//     }

//     public static async logOut(req: Request, res: Response) {


//     }


//     public static async validate(req: Request, res: Response, next: NextFunction) {

//         try {
//             const status = await Validator.validate(req.body, attributeValidationSchema, res)
//             if (status) return next();
//         } catch (error) {
//             return ResponseHandler.error(res, Constants.HTTP_STATUS_CODE_INTERNAL_SERVER_ERROR, 'Validation failed', error);
//         }

//     }

// }