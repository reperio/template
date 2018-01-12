'use strict';

import * as Hapi from 'hapi';
import {register} from './api';

async function run() : Promise<void> {
    const server = new Hapi.Server({ port: 3000, host: 'localhost' });

    register(server);

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
}

run();