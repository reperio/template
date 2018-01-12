import * as fs from 'file-system';
import * as path from 'path';
import * as winston from 'winston';


const thisFileBasename = path.basename(module.filename);

export function register (server: any) : void {
    // autoload all files in this directory
    fs
        .readdirSync(__dirname)
        .filter(fileName => (fileName.indexOf('.') !== 0) && (fileName !== thisFileBasename) && (fileName.slice(-3) === '.js'))
        .forEach(fileName => {
            server.route(require(path.join(__dirname, fileName)).default);
            winston.info(`Added ${fileName} to the API routes.`);
        });
};