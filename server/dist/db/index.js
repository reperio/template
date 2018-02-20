"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_starter_1 = require("db-starter");
const testRepository_1 = require("./repositories/testRepository");
const connect_1 = require("./connect");
class UnitOfWork extends db_starter_1.BaseUnitOfWork {
    constructor(logger) {
        super(logger, connect_1.knex);
        this.testRepository = new testRepository_1.TestRepository(this);
    }
}
exports.UnitOfWork = UnitOfWork;
//# sourceMappingURL=index.js.map