"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("file-system");
const path = require("path");
const winston = require("winston");
const thisFileBasename = path.basename(module.filename);
function register(server) {
    // autoload all files in this directory
    fs
        .readdirSync(__dirname)
        .filter(fileName => (fileName.indexOf('.') !== 0) && (fileName !== thisFileBasename) && (fileName.slice(-3) === '.js'))
        .forEach(fileName => {
        server.route(require(path.join(__dirname, fileName)).default);
        winston.info(`Added ${fileName} to the API routes.`);
    });
}
exports.register = register;
;
//# sourceMappingURL=index.js.map