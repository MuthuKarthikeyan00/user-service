import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default class Encryption {

    private static saltRounds: number = 10; // Default salt rounds

    // Method to set salt rounds, can be configured from environment variables or other config
    public static configureSaltRounds(rounds: number): void {
      this.saltRounds = rounds;
    }
  
    // Asynchronous method to generate a salt
    private static async getSalt(): Promise<string> {
      return bcrypt.genSalt(this.saltRounds);
    }
  
    // Asynchronous method to hash a password with additional values (e.g., email and current date)
    public static async hashPassword(value: string, uniqueValue: string ): Promise<string> {
      const salt = await this.getSalt();
      const combinedValue = `${value}${uniqueValue}`;
      return bcrypt.hashSync(combinedValue, salt);
    }
  
    // Asynchronous method to compare a password with a hash
    public static async comparePassword(value: string, uniqueValue: string,hash: string): Promise<boolean> {
      const combinedValue = `${value}${uniqueValue}`;
      return bcrypt.compareSync(combinedValue, hash);
    }
}