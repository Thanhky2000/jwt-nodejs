import { Pool } from 'pg';
// Cấu hình kết nối với PostgreSQL
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "jwt",
    password: "071052443",
    port: 5432,
  });

module.exports = pool;
