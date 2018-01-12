'use strict';

import * as Hapi from 'hapi';
import {register} from './api';
import * as winston from 'winston';
require('winston-daily-rotate-file');

function configureLogs() {
    winston.add(winston.transports.DailyRotateFile, {
        name: "appFile",
        filename: "./logs/app.log",
        datePattern: 'yyyy-MM-dd.',
        prepend: true,
        level: "debug",
        humanReadableUnhandledException: true,
        handleExceptions: true,
        json: true
    });
}

async function startServer() : Promise<void> {
    const server = new Hapi.Server({ port: 3000, host: 'localhost' });

    register(server);

    await server.start();
    winston.info(`Server running at: ${server.info.uri}`);
}

configureLogs();
startServer();