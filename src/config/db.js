import pkg from "pg" ;
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

const db = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});


db.on('connect', () => {
    console.log('Postgres connected')
})

db.on("error", (err) => {
  console.error("Postgres connection error:", err.stack);
});

export default db