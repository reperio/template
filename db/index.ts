import { Model } from 'objection';
import * as Knex from 'knex';
import {TestRepository} from './repositories/testRepository';
import * as nconf from "nconf";
import * as path from 'path';

export class DB {
    knex: Knex;

    constructor() {
        nconf.argv().env().file('development', path.resolve(__dirname, 'config', 'development.json'));
        console.log(nconf.get('db-username'));
        this.knex = Knex(nconf.get('knex'));
        Model.knex(this.knex);
    }

    testRepository() : TestRepository {
        return new TestRepository();
    }
}