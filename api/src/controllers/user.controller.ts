import { JsonController, Post,  Body} from 'kiwi-server';


@JsonController('/user')
export class UserController {

    constructor() {
    }



    @Post('/login')
    public login(@Body() user: any) {
        return { message: "Login Ok" };
    }
    
    
}