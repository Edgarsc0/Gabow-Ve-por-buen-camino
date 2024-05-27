import pg from "pg"

const config = {
    user: process.env.POSTGRES_USER,
    host: process.env.PPOSTGRES_HOST,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
}

console.log(config)

export const pool = new pg.Pool(config);

