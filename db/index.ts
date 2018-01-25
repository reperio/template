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
        this.knex = Knex({
            client: 'pg',
            connection: {
                host: '127.0.0.1',
                user: nconf.get('db-username'),
                password: nconf.get('db-password'),
                database: 'sample'
            }
        });
        Model.knex(this.knex);
        this.addTables().catch(console.error);
    }

    async addTables() : Promise<void> {
        await this.knex.schema.createTableIfNotExists('Note', table => {
            table.increments('id').primary();
            table.string('text');
        });
        console.log('table added');
    }

    testRepository() : TestRepository {
        return new TestRepository();
    }
}