'use strict';

import * as Hapi from 'hapi';
import {registerApiRoutes} from './api';
import * as winston from 'winston';
require('winston-daily-rotate-file');

export class Server {
    server:any;

    constructor() {
        const file_transport = new (winston.transports.DailyRotateFile)({
            name: "appFile",
            filename: "./logs/app.log",
            datePattern: 'yyyy-MM-dd.',
            prepend: true,
            level: "debug",
            humanReadableUnhandledException: true,
            handleExceptions: true,
            json: true
        });
    
        const console_transport = new (winston.transports.Console)({
            prepend: true,
            level: "debug",
            humanReadableUnhandledException: true,
            handleExceptions: true,
            json: false,
            colorize: true
        });

        const logger = new (winston.Logger)({
            transports: [
                file_transport,
                console_transport
            ]
        });

        this.server = new Hapi.Server({ port: 3000, host: 'localhost' });
        this.server.app.logger = logger;

        
        
    }

    async startServer(isTestMode:boolean) : Promise<void> {
        //register standard plugins
        await this.server.register({plugin: require('hapijs-status-monitor')});

        //register standard api routes
        registerApiRoutes(this.server);
    
        if (!isTestMode) {
            await server.start();
            this.logger.info(`Server running at: ${server.info.uri}`);
        }
    }
}

