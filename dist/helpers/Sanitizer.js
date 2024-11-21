var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import sanitizer from 'sanitizer';
export default class Sanitizer {
    static escape(text) {
        return sanitizer.escape(text);
    }
    static sanitize(text) {
        return sanitizer.sanitize(text);
    }
    static sanitizeString(text) {
        return Sanitizer.sanitize(Sanitizer.escape(String(text)));
    }
    static sanitizeHtml(params_1) {
        return __awaiter(this, arguments, void 0, function* (params, exclude = []) {
            Object.keys(params).forEach((key) => {
                if (params.hasOwnProperty(key) && typeof params[key] === 'string' && !exclude.includes(key))
                    params[key] = Sanitizer.sanitizeString(params[key]);
            });
            return params;
        });
    }
}
