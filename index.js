 //const { Login } = require("@mui/icons-material");

// 1 comentar codigo abaixo pra testar com o express
//  (async() => {
//     const db = require("./db");
//     console.log('Começou!');

//     console.log('insert into login');
//     const result = await db.insertLogin({usuario:"sherolin", senha:"sherolin"});
//     console.log(result.rowCount);

//     console.log('update login');
//     const result2 = await db.updateLogin(1, {usuario : "Sherolin Brunetto", senha: "sherolinbrunetto"});
//     console.log(result2.rowCount);

//     console.log('delete from login');
//     const result3 = await db.deleteLogin(1);
//     console.log(result3.rowCount);

//     console.log('select * from login');
//     const login = await db.selectLogin();
//     console.log(login);
//     })();

    // 1



    // COMENTEI DAQUI PRA BAIXO HOJE 30/12/2021

    // const repository = require('./repository')

    // const express = require('express')
    // const bodyParser = require ('body-parser')
    // const app = express()
    // const port = 3000

    // app.use(bodyParser.json());

    // app.use(
    //     bodyParser.urlencoded({
    //         extended: true,
    //     })
    // )

    // app.listen(port, () => {
    //     console.log(`Servidor rodando na porta de conexão ${port}.`)
    // })

    // app.get('/', (request, response)=>{
    //     response.json({ aplicacao: 'CRUD LOGIN'})
    // })

    // app.get('/login', repository.getLogins)
    // app.get('/login/:id', repository.getLoginId)
    // app.post('/login', repository.createLogin)
    // app.put('/login/:id', repository.updateLogin)
    // app.delete('/login/:id', repository.deletLogin)