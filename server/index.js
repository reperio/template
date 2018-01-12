'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Hapi = require("hapi");
const api_1 = require("./api");
const winston = require("winston");
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
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const server = new Hapi.Server({ port: 3000, host: 'localhost' });
        api_1.register(server);
        yield server.start();
        winston.info(`Server running at: ${server.info.uri}`);
    });
}
configureLogs();
startServer();
//# sourceMappingURL=index.js.map