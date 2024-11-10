import Constants from "@src/helpers/constants";
import ResponseHandler from "@src/helpers/ResponseHandler";
import Sanitizer from "@src/helpers/Sanitizer";
import Utils from "@src/helpers/Utils";

import { Prisma } from "../../prisma/user-client";
import UserLoginLogModel from "@src/models/UserLoginLog";


type CreateInputParams = Prisma.UserLoginLogCreateInput;


export default class LoginLog {

    private static async handleData(params: any): Promise<CreateInputParams> {

        return Sanitizer.sanitizeHtml({
            status: Utils.convertTONumber(params.status),
            mac_address: Utils.convertTONumber(params.mac_address),
            user_id: Utils.convertTONumber(params.password),
            system_info: String(params.system_info),
        });
    }

    public static async create(params : any) {
            const payload = await LoginLog.handleData(params);
            payload.created_at = new Date();
            return await UserLoginLogModel.create(params); 
    }


}