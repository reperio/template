'use strict';

import * as Hapi from 'hapi';

async function run() : Promise<void> {
    const server = new Hapi.Server({ port: 3000, host: 'localhost' });

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
}

run();