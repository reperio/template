import {BaseUnitOfWork} from 'db-starter';
import {TestRepository} from "./repositories/testRepository";
import {Winston} from 'winston';
import {knex} from './connect';

export class UnitOfWork extends BaseUnitOfWork {
    testRepository: TestRepository;

    constructor(logger: Winston) {
        super(logger, knex);

        this.testRepository = new TestRepository(this);
    }
}