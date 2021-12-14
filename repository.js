// async function connect(){
//     if (global.connection)
//         return global.connection.connect();

//     const {Pool} = require('pg');
//     const pool = new Pool({
//         connectionString: 'postgres://postgres:0268@localhost:5432/doce_maria_kids_db'
//     });
    
//     //apenas testando a conexão
//     const client = await pool.connect();
//     console.log("Criou pool de conexão no PostgresSQL!");

//     const res = await client.query('select now()');
//     console.log(res.rows[0]);
//     client.release();

//     //aguardando para usar sempre o mesmo
//     global.connection = pool;
//     return pool.connect();
// }

//  const db = require("./db");
// async function selectLogin(){
//     const client = await connect();
//     const res = await client.query('select * from login');
//     return res.rows;
// }


// async function insertLogin(login){
//     const client = await connect();
//     const sql = 'insert into login(usuario, senha) values($1, $2);';
//     const values = [login.usuario, login.senha];
//     return await client.query(sql, values);
// }


// async function updateLogin(id, login){
//     const client = await connect();
//     const sql = 'update login set usuario = $1, senha = $2 where id = $3';
//     const values = [login.usuario, login.senha, id];
//     return await client.query(sql, values);
// }


// async function deleteLogin(id){
//     const client = await connect();
//     const sql = 'delete from login where id = $1;';
//     return await client.query(sql,[id]);
// }

// module.exports = {selectLogin, insertLogin, updateLogin, deleteLogin}

const Pool = require('pg').Pool;
    const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database:'doce_maria_kids_db',
        password: '0268',
        port: 5432,
     });

     const getLogins = (request, response) => {
         pool.query('select * from login oder by id desc', (error, results) =>{
             if (error){
                 throw error
             }
             response.status(200).json(results.rows)
         })
     }

     const getLoginId = (request, response) => {
         const id = parseInt(request.params.id)

        pool.query('select * from login where id = $1', [id], (error, results) => {
            if (error){
                throw error
            }
            response.status(200).json(results.rows)
        })
    }

    const createLogin = (request, response) => {
        const {usuario, senha} = request.body
        
        pool.query('insert into login(usuario, senha) values($1, $2)', [nome, senha], (error, results) => {
            if (error){
                throw error
            }
            response.status(201).send('Login criado com suscesso.')
        })
    }

    const updateLogin = (request, response) => {
        const id = parseInt(request.params.id)
        const {usuario, senha} = request.body

        pool.query(
            'update login set usuario = $1, senha = $2, where id = $3',
            [usuario, senha, id],
            (error, result) =>{
                if(error){
                    throw error
                }
                response.status(200).send(`Login ${id} atualizado como sucesso.`)
            }
        )
    }

    const deletLogin = (request, response) => {
        const id =  parseInt(request.params.id)

        pool.query('delete from login where id = $1',[id], (error, result) => {
            if (error){
                throw error
            }
            response.status(200).send(`Login removido com sucesso com o identificador: ${id}`)
        })
    }

    module.exports = {getLogins, getLoginId, createLogin, updateLogin, deletLogin}

