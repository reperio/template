define("connect", ["require", "exports", "knex", "objection", "nconf", "path", "db-starter"], function (require, exports, Knex, objection_1, nconf, path, db_starter_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Model = objection_1.Model;
    nconf.argv().env().file('development', path.resolve(__dirname, 'config', 'development.json'));
    const knex = Knex(nconf.get('knex'));
    exports.knex = knex;
    db_starter_1.BaseModel.knex(knex);
});
define("knexfile", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const knex = {
        development: {
            client: "postgresql",
            connection: {
                database: "sample",
                user: "postgres",
                password: "postgres"
            },
            migrations: {
                tableName: "migrations"
            }
        },
        staging: {
            client: "postgresql",
            connection: {
                database: "sample",
                user: "postgres",
                password: "postgres"
            },
            pool: {
                min: 2,
                max: 10
            },
            migrations: {
                tableName: "migrations"
            }
        },
        production: {
            client: "postgresql",
            connection: {
                database: "sample",
                user: "postgres",
                password: "postgres"
            },
            pool: {
                min: 2,
                max: 10
            },
            migrations: {
                tableName: "migrations"
            }
        }
    };
    exports.default = knex;
});
define("models/note", ["require", "exports", "db-starter"], function (require, exports, db_starter_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Note extends db_starter_2.BaseModel {
        static get tableName() {
            return 'notes';
        }
    }
    exports.Note = Note;
});
define("repositories/testRepository", ["require", "exports", "models/note"], function (require, exports, note_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class TestRepository {
        constructor(uow) {
            this.uow = uow;
        }
        async addNote(note) {
            const noteModel = note_1.Note.fromJson({ text: note });
            return await note_1.Note.query(this.uow.transaction).insert(noteModel);
        }
        async getNotes() {
            return await note_1.Note.query(this.uow.transaction);
        }
    }
    exports.TestRepository = TestRepository;
});
define("unitOfWork", ["require", "exports", "db-starter", "repositories/testRepository", "connect"], function (require, exports, db_starter_3, testRepository_1, connect_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class UnitOfWork extends db_starter_3.BaseUnitOfWork {
        constructor(logger) {
            super(logger, connect_1.knex);
            this.testRepository = new testRepository_1.TestRepository(this);
        }
    }
    exports.UnitOfWork = UnitOfWork;
});
//# sourceMappingURL=index.js.map