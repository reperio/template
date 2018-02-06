'use strict';

import {DB} from '../db'
import {Server} from 'hapijs-starter';
import * as path from 'path';

async function startServer() : Promise<void> {
    const server = new Server({authEnabled: false});
    await server.registerRoutesFromDirectory(path.resolve(__dirname, './api'));
    await server.startServer();
    server.server.app.db = new DB();
}

startServer();