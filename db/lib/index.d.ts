/// <reference types="knex" />
/// <reference types="winston" />
declare module "connect" {
    import * as Knex from 'knex';
    import { Model } from 'objection';
    const knex: Knex;
    export { knex };
    export { Model };
}
declare module "knexfile" {
    const knex: {
        development: {
            client: string;
            connection: {
                database: string;
                user: string;
                password: string;
            };
            migrations: {
                tableName: string;
            };
        };
        staging: {
            client: string;
            connection: {
                database: string;
                user: string;
                password: string;
            };
            pool: {
                min: number;
                max: number;
            };
            migrations: {
                tableName: string;
            };
        };
        production: {
            client: string;
            connection: {
                database: string;
                user: string;
                password: string;
            };
            pool: {
                min: number;
                max: number;
            };
            migrations: {
                tableName: string;
            };
        };
    };
    export default knex;
}
declare module "models/note" {
    import { BaseModel } from 'db-starter';
    export class Note extends BaseModel {
        text: string;
        static readonly tableName: string;
    }
}
declare module "repositories/testRepository" {
    import { Note } from "models/note";
    import { UnitOfWork } from "unitOfWork";
    export class TestRepository {
        uow: UnitOfWork;
        constructor(uow: UnitOfWork);
        addNote(note: any): Promise<Note>;
        getNotes(): Promise<Note[]>;
    }
}
declare module "unitOfWork" {
    import { BaseUnitOfWork } from 'db-starter';
    import { TestRepository } from "repositories/testRepository";
    import { Winston } from 'winston';
    export class UnitOfWork extends BaseUnitOfWork {
        testRepository: TestRepository;
        constructor(logger: Winston);
    }
}
