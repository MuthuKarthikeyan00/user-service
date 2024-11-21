var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import bcrypt from "bcryptjs";
class Encryption {
    // Method to set salt rounds, can be configured from environment variables or other config
    static configureSaltRounds(rounds) {
        this.saltRounds = rounds;
    }
    // Asynchronous method to generate a salt
    static getSalt() {
        return __awaiter(this, void 0, void 0, function* () {
            return bcrypt.genSalt(this.saltRounds);
        });
    }
    // Asynchronous method to hash a password with additional values (e.g., email and current date)
    static hashPassword(value, uniqueValue) {
        return __awaiter(this, void 0, void 0, function* () {
            const salt = yield this.getSalt();
            const combinedValue = `${value}${uniqueValue}`;
            return bcrypt.hashSync(combinedValue, salt);
        });
    }
    // Asynchronous method to compare a password with a hash
    static comparePassword(value, uniqueValue, hash) {
        return __awaiter(this, void 0, void 0, function* () {
            const combinedValue = `${value}${uniqueValue}`;
            return bcrypt.compareSync(combinedValue, hash);
        });
    }
}
Encryption.saltRounds = 10; // Default salt rounds
export default Encryption;
