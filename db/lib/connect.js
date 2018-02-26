"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Knex = require("knex");
const objection_1 = require("objection");
exports.Model = objection_1.Model;
const nconf = require("nconf");
const path = require("path");
const db_starter_1 = require("db-starter");
nconf.argv().env().file('development', path.resolve(__dirname, 'config', 'development.json'));
const knex = Knex(nconf.get('knex'));
exports.knex = knex;
db_starter_1.BaseModel.knex(knex);
//# sourceMappingURL=connect.js.map