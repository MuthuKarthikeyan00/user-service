import { PrismaClient, Prisma } from '../../prisma/user-client';
import { NonZeroPositiveNumber } from '@src/types/types';

const prisma = new PrismaClient();

type CreateInputParams = Prisma.UserLoginLogCreateInput;


export default class UserLoginLog{

    public static async create(params : CreateInputParams) {
        return await prisma.userLoginLog.create({
            data: params
        })
    }

    public static async update(id:number,params : CreateInputParams) {

        return await prisma.userLoginLog.update({
            where: {
                id,
              },
              data: params
        })

    }

    public static async get<T extends number>(id : NonZeroPositiveNumber<T> ) {

        return await prisma.userLoginLog.findUnique({
            where: { id }
          });
    }
    
    public static async isValid<T extends number>(id : NonZeroPositiveNumber<T> ) : Promise<boolean>{
        const product = await UserLoginLog.get(id);
        return !!product?.id
    }   

}