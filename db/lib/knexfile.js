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
//# sourceMappingURL=knexfile.js.map