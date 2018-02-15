import * as Knex from 'knex';
import {Model} from 'objection';
import * as nconf from "nconf";
import * as path from "path";

nconf.argv().env().file('development', path.resolve(__dirname, 'config', 'development.json'));
const knex = Knex(nconf.get('knex'));

Model.knex(knex);
console.log('Model binded');

export {knex};
export {Model};