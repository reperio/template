System.register("connect", ["knex", "objection", "nconf", "path", "db-starter"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Knex, objection_1, nconf, path, db_starter_1, knex;
    return {
        setters: [
            function (Knex_1) {
                Knex = Knex_1;
            },
            function (objection_1_1) {
                objection_1 = objection_1_1;
            },
            function (nconf_1) {
                nconf = nconf_1;
            },
            function (path_1) {
                path = path_1;
            },
            function (db_starter_1_1) {
                db_starter_1 = db_starter_1_1;
            }
        ],
        execute: function () {
            exports_1("Model", objection_1.Model);
            nconf.argv().env().file('development', path.resolve(__dirname, 'config', 'development.json'));
            knex = Knex(nconf.get('knex'));
            exports_1("knex", knex);
            db_starter_1.BaseModel.knex(knex);
        }
    };
});
System.register("knexfile", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var knex;
    return {
        setters: [],
        execute: function () {
            knex = {
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
            exports_2("default", knex);
        }
    };
});
System.register("models/note", ["db-starter"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var db_starter_2, Note;
    return {
        setters: [
            function (db_starter_2_1) {
                db_starter_2 = db_starter_2_1;
            }
        ],
        execute: function () {
            Note = class Note extends db_starter_2.BaseModel {
                static get tableName() {
                    return 'notes';
                }
            };
            exports_3("Note", Note);
        }
    };
});
System.register("repositories/testRepository", ["models/note"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var note_1, TestRepository;
    return {
        setters: [
            function (note_1_1) {
                note_1 = note_1_1;
            }
        ],
        execute: function () {
            TestRepository = class TestRepository {
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
            };
            exports_4("TestRepository", TestRepository);
        }
    };
});
System.register("unitOfWork", ["db-starter", "repositories/testRepository", "connect"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var db_starter_3, testRepository_1, connect_1, UnitOfWork;
    return {
        setters: [
            function (db_starter_3_1) {
                db_starter_3 = db_starter_3_1;
            },
            function (testRepository_1_1) {
                testRepository_1 = testRepository_1_1;
            },
            function (connect_1_1) {
                connect_1 = connect_1_1;
            }
        ],
        execute: function () {
            UnitOfWork = class UnitOfWork extends db_starter_3.BaseUnitOfWork {
                constructor(logger) {
                    super(logger, connect_1.knex);
                    this.testRepository = new testRepository_1.TestRepository(this);
                }
            };
            exports_5("UnitOfWork", UnitOfWork);
        }
    };
});
//# sourceMappingURL=index.js.map