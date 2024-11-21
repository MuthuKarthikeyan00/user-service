var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Sanitizer from "@src/helpers/Sanitizer";
import Utils from "@src/helpers/Utils";
import UserLoginLogModel from "@src/models/UserLoginLog";
export default class LoginLog {
    static handleData(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return Sanitizer.sanitizeHtml({
                status: Utils.convertTONumber(params.status),
                mac_address: Utils.convertTONumber(params.mac_address),
                user_id: Utils.convertTONumber(params.password),
                system_info: String(params.system_info),
            });
        });
    }
    static create(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = yield LoginLog.handleData(params);
            payload.created_at = new Date();
            return yield UserLoginLogModel.create(params);
        });
    }
}
