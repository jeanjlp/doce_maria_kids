async function connect(){
    if (global.connection)
        return global.connection.connect();

    const {Pool} = require('pg');
    const pool = new Pool({
        connectionString: 'postgres://postgres:0268@localhost:5432/doce_maria_kids_db'
    });
    
    //apenas testando a conexão
    const client = await pool.connect();
    console.log("Criou pool de conexão no PostgresSQL!");

    const res = await client.query('select now()');
    console.log(res.rows[0]);
    client.release();

    //aguardando para usar sempre o mesmo
    global.connection = pool;
    return pool.connect();
}

 const db = require("./db");
async function selectLogin(){
    const client = await connect();
    const res = await client.query('select * from login');
    return res.rows;
}


async function insertLogin(login){
    const client = await connect();
    const sql = 'insert into login(usuario, senha) values($1, $2);';
    const values = [login.usuario, login.senha];
    return await client.query(sql, values);
}


async function updateLogin(id, login){
    const client = await connect();
    const sql = 'update login set usuario = $1, senha = $2 where id = $3';
    const values = [login.usuario, login.senha, id];
    return await client.query(sql, values);
}


async function deleteLogin(id){
    const client = await connect();
    const sql = 'delete from login where id = $1;';
    return await client.query(sql,[id]);
}

module.exports = {selectLogin, insertLogin, updateLogin, deleteLogin}
