import { createKiwiServer, IKiwiOptions } from 'kiwi-server';
import { UserController } from './controllers/user.controller'
import * as http from 'http';

async function validateAuthentication(request: http.IncomingMessage, roles: Array<string>) {
    
    return true;
}

const options: IKiwiOptions = {
    controllers: [UserController],
    authorization: validateAuthentication,
    middlewares: [],
    cors: {
        enabled: true,
        domains: ['*']
    },
    documentation: {
        enabled: true,
        path: '/apidoc'
    },
    prefix: '/v1',
    log: true,
    port: 8086
}
const server = createKiwiServer(options);