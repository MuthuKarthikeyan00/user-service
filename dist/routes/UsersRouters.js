import Auth from '@src/controllers/Auth';
import Role from '@src/controllers/Role';
import User from '@src/controllers/User';
import { Router } from 'express';
class UserRouters {
    static init() {
        if (!this.router) {
            throw new Error('This.router is null');
        }
        this.router.post('/', User.validate, User.create);
        this.router.put('/:id', Auth.jwtVerify, User.validate, User.update);
        this.router.post('/login', Auth.validate, Auth.logIn);
        this.router.post('/logout', Auth.jwtVerify, Auth.logOut);
        this.router.post('/role', Role.validate, Role.create);
        this.router.put('/role/:id', Role.validate, Role.update);
        return this.router;
    }
}
UserRouters.router = Router();
export default UserRouters;
