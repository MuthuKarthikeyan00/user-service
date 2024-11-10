var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Constants from "@src/helpers/constants";
import ResponseHandler from "@src/helpers/ResponseHandler";
import Sanitizer from "@src/helpers/Sanitizer";
import Utils from "@src/helpers/Utils";
import Validator from "@src/validator/Validator";
import { logInValidationSchema } from "@src/validator/schema";
import UserModel from "@src/models/User";
import Encryption from "@src/helpers/Encryption";
import jwt from "jsonwebtoken";
import LoginLog from "./LoginLog";
export default class Auth {
    static handleData(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return Sanitizer.sanitizeHtml({
                email: String(body.email),
                password: String(body.password),
            });
        });
    }
    static logIn(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const params = yield Auth.handleData(body);
                const validUser = yield UserModel.getByEmail(params.email);
                if (!validUser || !(yield Encryption.comparePassword(params.password, validUser.email, validUser.password))) {
                    return ResponseHandler.error(res, {}, Constants.HTTP_STATUS_CODE_UNAUTHORIZED, 'email and password mismatch');
                }
                if (Utils.isGraterthenZero(validUser === null || validUser === void 0 ? void 0 : validUser.id)) {
                    const payloadData = {
                        user_id: Utils.convertTONumber(validUser.id),
                        role_id: Utils.convertTONumber(validUser.role_id),
                        company_id: Utils.convertTONumber(validUser.company_id),
                        company_branch_id: Utils.convertTONumber(validUser.company_branch_id),
                    };
                    const token = Auth.jwtSign(payloadData);
                    const macAddress = req.headers.mac_address;
                    const loginLog = yield LoginLog.create({ user_id: validUser.id, mac_address: macAddress, status: 1, system_info: { user_agent: req.headers['user-agent'], ip_address: req.ip } });
                    if (!Utils.isGraterthenZero(loginLog === null || loginLog === void 0 ? void 0 : loginLog.id))
                        return ResponseHandler.error(res);
                    return ResponseHandler.success(res, Constants.HTTP_STATUS_CODE_OK, {
                        access_token: `Bearer ${token}`,
                    }, 'User logged in successfully');
                }
                return ResponseHandler.error(res, {}, Constants.HTTP_STATUS_CODE_UNAUTHORIZED, 'email and password mismatch');
            }
            catch (error) {
                return ResponseHandler.error(res, error);
            }
        });
    }
    static logOut(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // console.log(req.user);
                const body = req.body;
                const user_id = Utils.convertTONumber(body.user_id);
                const macAddress = req.headers.mac_address;
                const loginLog = yield LoginLog.create({ user_id, mac_address: macAddress, status: 1, system_info: { user_agent: req.headers['user-agent'], ip_address: req.ip } });
                if (!Utils.isGraterthenZero(loginLog === null || loginLog === void 0 ? void 0 : loginLog.id))
                    return ResponseHandler.error(res);
                return ResponseHandler.success(res, Constants.HTTP_STATUS_CODE_OK, {}, 'User logout in successfully');
            }
            catch (error) {
                return ResponseHandler.error(res, error);
            }
        });
    }
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const params = yield Auth.handleData(body);
                params.created_by = 1;
                params.created_at = new Date();
                const data = yield UserModel.create(params);
                if (Utils.isGraterthenZero(data.id))
                    return ResponseHandler.success(res, Constants.HTTP_STATUS_CODE_CREATED, data);
                return ResponseHandler.error(res);
            }
            catch (error) {
                return ResponseHandler.error(res, error);
            }
        });
    }
    static validate(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const status = yield Validator.validate(req.body, logInValidationSchema, res);
                if (status)
                    return next();
            }
            catch (error) {
                return ResponseHandler.error(res, error, Constants.HTTP_STATUS_CODE_INTERNAL_SERVER_ERROR, 'Validation failed');
            }
        });
    }
    static jwtSign(payload) {
        return jwt.sign(payload, "7e86472d-a6d1-4365-9eb7-6b5917ae318f", {
            expiresIn: "1d",
        });
    }
    static jwtVerify(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const authHeader = req.headers.authorization;
            const macAddress = req.headers.mac_address;
            if (!authHeader) {
                return ResponseHandler.error(res, {}, Constants.HTTP_STATUS_CODE_UNAUTHORIZED);
            }
            const token = authHeader.split(" ")[1];
            var userData;
            // Verify the JWT token
            jwt.verify(token, "7e86472d-a6d1-4365-9eb7-6b5917ae318f", (err, user) => {
                if (err) {
                    return ResponseHandler.error(res, err, Constants.HTTP_STATUS_CODE_UNAUTHORIZED);
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
            return ResponseHandler.error(res, {}, Constants.HTTP_STATUS_CODE_NOT_FOUND, 'session expired');
        });
    }
    ;
}
