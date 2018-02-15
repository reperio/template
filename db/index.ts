import {BaseUnitOfWork} from 'db-starter';
import {TestRepository} from "./repositories/testRepository";
import {Winston} from 'winston';
import * as path from "path";
import * as nconf from "nconf";
import {knex, Model} from './connect';

export class UnitOfWork extends BaseUnitOfWork {
    testRepository: TestRepository;

    constructor(logger: Winston) {
        super(logger, knex);

        this.testRepository = new TestRepository(this);
    }
}