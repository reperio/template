declare const knex: {
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
