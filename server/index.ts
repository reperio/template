'use strict';

import {UnitOfWork} from '../db'
import {Server} from 'hapijs-starter';
import * as path from 'path';

async function startServer() : Promise<void> {
    const server = new Server({authEnabled: false});
    await server.registerRoutesFromDirectory(path.resolve(__dirname, './api'));

    await server.registerExtension({
        type: 'onRequest',
        method: async (request, h) => {
            request.app.uows = [];

            request.app.getNewUoW = async () => {
                const uow = new UnitOfWork(server.app.logger);
                request.app.uows.push(uow);
                return uow;
            };

            return h.continue;
        }
    });

    await server.startServer();
}

startServer();