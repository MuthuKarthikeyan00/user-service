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
import UserModel from "@src/models/User";
import Validator from "@src/validator/Validator";
import { userValidationSchema } from "@src/validator/schema";
import Encryption from "@src/helpers/Encryption";
export default class User {
    static handleData(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return Sanitizer.sanitizeHtml({
                name: String(body.name),
                user_code: String(body.user_code),
                display_name: String(body.display_name),
                profile: String(body.profile),
                email: String(body.email),
                password: String(body.password),
                permanent_address: String(body.permanent_address),
                current_address: String(body.current_address),
                city: String(body.city),
                phone: String(body.phone),
                role_id: Utils.convertTONumber(body.role_id),
                company_branch_id: 1,
                company_id: 7777777,
                postcode: Utils.convertTONumber(body.postcode),
                country: Utils.convertTONumber(body.country),
                state: Utils.convertTONumber(body.state),
            });
        });
    }
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const params = yield User.handleData(body);
                params.created_by = 3;
                params.password = yield Encryption.hashPassword(params.password, params.email);
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
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // const body = req.body;
                // const id = Number(req.params.id);
                // if (!Utils.isGraterthenZero(id)) {
                //     return ResponseHandler.error(
                //         res,{},
                //         Constants.HTTP_STATUS_CODE_NOT_FOUND,
                //         "invalid id"
                //     );
                // }
                // const params = await User.handleData(body);
                // params.updated_at = new Date().toISOString();
                // params.updated_by = req.user.id
                // params.password = await Encryption.hashPassword(params.password , params.email);
                // const data = await UserModel.update(id, params);
                // if (data.id > 0) return ResponseHandler.success(res, Constants.HTTP_STATUS_CODE_OK, data, 'User updated');
                // return ResponseHandler.error(res);
            }
            catch (error) {
                return ResponseHandler.error(res, error);
            }
        });
    }
    static validate(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const status = yield Validator.validate(req.body, userValidationSchema, res);
                if (status)
                    return next();
            }
            catch (error) {
                return ResponseHandler.error(res, error, Constants.HTTP_STATUS_CODE_INTERNAL_SERVER_ERROR, 'Validation failed');
            }
        });
    }
}
