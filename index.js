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

    const express = require ('express')
    const bodyParser = require ('body-parser')
    const port = 3000

    app.use(bodyParser.json());

    app.use(
        bodyParser.urlencoded({
            extended: true,
        })
    )

    app.listen(port,()=>{
        console.log('Servidor rodando na porta de conexão ${port}.')
    })