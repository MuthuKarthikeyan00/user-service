import { UserSessionType } from '@src/types/types';
import { AsyncLocalStorage } from 'async_hooks';


export default class Context {
    

    private static asyncLocalStorage = new AsyncLocalStorage<UserSessionType>();

    public static async store(context: UserSessionType) {
        Context.asyncLocalStorage.run(context, () => {});
    }

    public static async get() : Promise<UserSessionType | undefined> {
       return Context.asyncLocalStorage.getStore();
    }


}

