import { PrismaClient, Prisma } from '../../prisma/user-client';
import { NonZeroPositiveNumber } from '@src/types/types';

const prisma = new PrismaClient();

type CreateInputParams = Prisma.UserRoleCreateInput;


export default class UserRole{

    public static async create(params : CreateInputParams) {
        return await prisma.userRole.create({
            data: params
        })
    }

    public static async update(id:number,params : CreateInputParams) {

        return await prisma.userRole.update({
            where: {
                id,
              },
              data: params
        })

    }

    public static async get<T extends number>(id : NonZeroPositiveNumber<T> ) {

        return await prisma.userRole.findUnique({
            where: { id }
          });
    }
    
    public static async isValid<T extends number>(id : NonZeroPositiveNumber<T> ) : Promise<boolean>{
        const product = await this.get(id);
        return !!product?.id
    } 
    
    public static async getByName(name : string) {
        return await prisma.userRole.findUnique({
            where: { name }
          });
    }


    public static async isNameExists(name : string)  : Promise<boolean>{
        const product = await this.getByName(name);
        return !!product?.id
    }
}