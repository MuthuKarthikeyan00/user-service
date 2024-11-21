var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Constants from '@src/helpers/constants';
import ResponseHandler from '@src/helpers/ResponseHandler';
import z from 'zod';
export default class Validator {
    static validate(params, schema, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                schema.parse(params);
                return true;
            }
            catch (error) {
                if (error instanceof z.ZodError) {
                    return ResponseHandler.error(res, error, Constants.HTTP_STATUS_CODE_BAD_REQUEST, 'Validation failed');
                }
                else {
                    return ResponseHandler.error(res, error, Constants.HTTP_STATUS_CODE_INTERNAL_SERVER_ERROR, 'Validation failed');
                }
            }
        });
    }
}
