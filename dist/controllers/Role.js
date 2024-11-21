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
import { userTypeValidationSchema } from "@src/validator/schema";
import UserRoleModel from "@src/models/UserRole";
export default class Role {
    static handleData(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return Sanitizer.sanitizeHtml({
                name: String(body.name),
                description: String(body.description),
            });
        });
    }
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const params = yield Role.handleData(body);
                params.created_by = 1;
                params.created_at = new Date();
                const data = yield UserRoleModel.create(params);
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
                const body = req.body;
                const id = Number(req.params.id);
                if (!Utils.isGraterthenZero(id)) {
                    return ResponseHandler.error(res, {}, Constants.HTTP_STATUS_CODE_NOT_FOUND, "invalid id");
                }
                const params = yield Role.handleData(body);
                params.updated_at = new Date();
                params.updated_by = 1;
                const data = yield UserRoleModel.update(id, params);
                if (data.id > 0)
                    return ResponseHandler.success(res, Constants.HTTP_STATUS_CODE_OK, data, 'User updated');
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
                const status = yield Validator.validate(req.body, userTypeValidationSchema, res);
                if (status)
                    return next();
            }
            catch (error) {
                return ResponseHandler.error(res, error, Constants.HTTP_STATUS_CODE_INTERNAL_SERVER_ERROR, 'Validation failed');
            }
        });
    }
}
