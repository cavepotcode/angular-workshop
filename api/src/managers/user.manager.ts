import { GenericResponse } from "../models/response";
import { User } from "../models/user";
import { uuid } from "uuidv4";
var _ = require('lodash');

export class UserManager {
    constructor() {
    }

    private static instance: UserManager;

    token: string;
    users: Array<User> = [];

    public static getInstance() {
        if (!UserManager.instance) {
            UserManager.instance = new UserManager;
        }
        return UserManager.instance;
    }

    public getUsers() {
        return new GenericResponse(this.users);
    }

    public addUser(user: User) {
        user.id = uuid();
        this.users.push(user);
        return new GenericResponse(user, 0, 'Usuario añadido correctamente');
    }

    public editUser(user: User) {
        let u = _.find(this.users, (u: User) => {
            return u.id === user.id;
        })

        u.email = user.email;
        u.password = user.password;
        return new GenericResponse(u, 0, 'Usuario editado correctamente');
    }

    public getUser(id: string) {
        return new GenericResponse(_.find(this.users, (u: User) => {
            return u.id === id;
        }))
    }


    public deleteUser(id: string) {
        this.users = _.filter(this.users, (u: User) => {
            return u.id !== id;
        })
        return new GenericResponse(null, 0, 'Usuario eliminado correctamente')
    }



    public login(user: User) {

        if (user.password === 'test1234' && user.email === "test@cavepot.com") {
            this.token = uuid();
            return new GenericResponse(this.token);
        } else {
            return new GenericResponse(null, 1, 'usuario o  password invalido');
        }

    }

    public logout(user: User) {
        this.token = ''
        return new GenericResponse(this.token, 0, '');
    }

}