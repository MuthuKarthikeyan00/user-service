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


    
    public static async getByUserId(user_id : number ) {
        return await prisma.userLoginLog.findFirst({
            where: {
                user_id,
            },
            orderBy : {
                created_at : 'desc'
            }
          });
    }   


}