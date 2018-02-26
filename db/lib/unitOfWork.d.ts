/// <reference types="winston" />
import { BaseUnitOfWork } from 'db-starter';
import { TestRepository } from "./repositories/testRepository";
import { Winston } from 'winston';
export declare class UnitOfWork extends BaseUnitOfWork {
    testRepository: TestRepository;
    constructor(logger: Winston);
}
