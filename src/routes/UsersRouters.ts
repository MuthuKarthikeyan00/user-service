import Auth from '@src/controllers/Auth';
import Role from '@src/controllers/Role';
import User from '@src/controllers/User';
import { Router ,Request, Response} from 'express';

export default class UserRouters {
    private static router = Router();

    public static init(): Router {
               
        if (!this.router) {
            throw new Error('This.router is null');
        }

        this.router.post('/', User.validate, User.create);
        this.router.put('/:id', Auth.jwtVerify, User.validate, User.update);

        this.router.post('/login', Auth.validate, Auth.logIn);
        this.router.post('/logout', Auth.jwtVerify,  Auth.logOut);

        this.router.post('/role', Role.validate, Role.create);
        this.router.put('/role/:id', Role.validate, Role.update);

        return this.router;
    }
}