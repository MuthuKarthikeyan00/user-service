var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PrismaClient } from '../../prisma/user-client';
const prisma = new PrismaClient();
export default class User {
    static create(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.user.create({
                data: params
            });
        });
    }
    static update(id, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.user.update({
                where: {
                    id,
                },
                data: params
            });
        });
    }
    static get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.user.findUnique({
                where: { id }
            });
        });
    }
    static getByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.user.findUnique({
                where: { email }
            });
        });
    }
    static isValid(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield User.get(id);
            return !!(product === null || product === void 0 ? void 0 : product.id);
        });
    }
}
