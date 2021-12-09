async function connect(){
    if (global.connection)
        return global.connection.connect();

    const {Pool} = require('pg');
    const pool = new Pool({
        connectionString: 'postgres://postgres:0268@localhost:5432/doce_maria_kids_db'
    });

    const client = await pool.connect();
    console.log("Criou pool de conexão no PostgresSQL!");

    const res = await client.query('select now()');
    console.log(res.rows[0]);
    client.release();

    global.connection = pool;
    return pool.connect();
}

// const db = require("./db");
async function SelectLogin(){
    const client = await connect();
    const res = await client.query('select * from login');
    return res.rows;
}
module.exports = {SelectLogin}
