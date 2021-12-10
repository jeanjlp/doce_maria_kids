 //const { Login } = require("@mui/icons-material");
(async() => {
    const db = require("./db");
    console.log('Começou!');

    console.log('insert into login');
    const result = await db.insertLogin({usuario:"sherolin", senha:"sherolin"});
    console.log(result.rowCount);

    console.log('update login');
    const result2 = await db.updateLogin(1, {usuario : "Sherolin Brunetto", senha: "sherolinbrunetto"});
    console.log(result2.rowCount);

    console.log('delete form login');
    const result3 = await db.deleteLogin(1);
    console.log(result3.rowCount);

    console.log('select * from login');
    const login = await db.selectLogin();
    console.log(login);
})();