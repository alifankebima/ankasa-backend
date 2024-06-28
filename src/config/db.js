//PostgreSQL config
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.PGURL,
  ssl: process.env.PGUSESSL && process.env.PGUSESSL === "true",
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

module.exports = pool;
