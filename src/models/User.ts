import { PrismaClient, Prisma } from '../../prisma/user-client';
import { NonZeroPositiveNumber } from '@src/types/types';

const prisma = new PrismaClient();

type CreateInputParams = Prisma.UserCreateInput;


export default class User{

    public static async create(params : CreateInputParams) {
        return await prisma.user.create({
            data: params
        })
    }

    public static async update(id:number,params : CreateInputParams) {

        return await prisma.user.update({
            where: {
                id,
              },
              data: params
        })

    }

    public static async get<T extends number>(id : NonZeroPositiveNumber<T> ) {

        return await prisma.user.findUnique({
            where: { id }
          });
    }

    public static async getByEmail(email : string ) {

        return await prisma.user.findUnique({
            where: { email  }
          });
    }
    
    public static async isValid<T extends number>(id : NonZeroPositiveNumber<T> ) : Promise<boolean>{
        const product = await User.get(id);
        return !!product?.id
    }   

}