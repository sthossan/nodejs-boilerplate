const sql = require('mssql');

const sqlConfig = {
  user: process.env.MSSQL_USER,
  password: process.env.MSSQL_PASSWORD,
  database: process.env.MSSQL_DB,
  server: process.env.MSSQL_HOST,
  options: {
    encrypt: false, // true for Azure
    trustServerCertificate: true, // change to true for local dev
  },
};

const connectMSSQL = async () => {
  try {
    const pool = await sql.connect(sqlConfig);
    console.log('MSSQL connected');
    return pool;
  } catch (err) {
    console.error('MSSQL connection error:', err);
    process.exit(1);
  }
};

module.exports = { connectMSSQL, sql };
