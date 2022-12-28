import { JsonController, Post, Body, Get, Param, Delete, Authorize, Put } from 'kiwi-server';
import { User } from '../models/user';
import { UserManager } from '../managers/user.manager';

@JsonController('/user')
export class UserController {

    constructor() {
    }


    @Authorize()
    @Get('/')
    public getUsers() {
        return UserManager.getInstance().getUsers();
    }
    @Authorize()
    @Post('/')
    public addUser(@Body() user: User) {
        return UserManager.getInstance().addUser(user);
    }

    @Authorize()
    @Put('/')
    public editUser(@Body() user: User) {
        return UserManager.getInstance().editUser(user);
    }
   

    @Authorize()
    @Get('/:id')
    public getUser(@Param('id') id: string) {
        return UserManager.getInstance().getUser(id);
    }

    @Authorize()
    @Delete('/:id')
    public deleteUser(@Param('id') id: string) {
        return UserManager.getInstance().deleteUser(id);
    }


    @Post('/login')
    public login(@Body() user: User) {

        return UserManager.getInstance().login(user);

    }

    @Authorize()
    @Post('/logout')
    public logout(@Body() user: User) {
        return UserManager.getInstance().logout(user);
    }

    






}