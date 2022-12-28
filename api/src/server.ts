import { createKiwiServer, IKiwiOptions } from 'kiwi-server';
import { UserController } from './controllers/user.controller'
import * as http from 'http';
import { HeadersMiddleware } from './headers.middleware.before';

async function validateAuthentication(request: http.IncomingMessage, roles: Array<string>) {
    let accessToken;
    accessToken = request.headers['authorization'];
    console.log(accessToken);
    if (accessToken) {
        return true;
    } else {
        return false
    }
}

const options: IKiwiOptions = {
    controllers: [UserController],
    authorization: validateAuthentication,
    middlewares: [HeadersMiddleware],
    cors: {
        enabled: true,
        domains: ['http://localhost:4200']
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