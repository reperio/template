'use strict';

import * as Hapi from 'hapi';
import {registerApiRoutes} from './api';
import * as winston from 'winston';
import * as statusMonitor from 'hapijs-status-monitor';
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

    registerApiRoutes(server);

    await server.start();
    winston.info(`Server running at: ${server.info.uri}`);
}

configureLogs();
startServer();