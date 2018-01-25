import { Model } from 'objection';
import * as Knex from 'knex';
import {TestRepository} from './repositories/testRepository';

export class DB {
    knex: Knex;

    constructor() {
        this.knex = Knex({
            client: 'pg',
            connection: {
                host: '127.0.0.1',
                user: 'postgres',
                password: 'postgres',
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