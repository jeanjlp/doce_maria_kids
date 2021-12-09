// const { Login } = require("@mui/icons-material");
(async() => {
    const db = require("./db");
    console.log('Começou!');

    console.log('select * from Login');
    const login = await db.SelectLogin();
    console.log(login);
})();