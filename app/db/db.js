import pg from "pg"

const config = {
    user: process.env.POSTGRES_USER || process.env.DB_USER,
    host: process.env.PPOSTGRES_HOST || process.env.DB_HOST,
    password: process.env.POSTGRES_PASSWORD || process.env.DB_PASSWORD,
    database: process.env.POSTGRES_DATABASE || process.env.DB_DATABASE,
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
}

console.log(config)

export const pool = new pg.Pool(config);

