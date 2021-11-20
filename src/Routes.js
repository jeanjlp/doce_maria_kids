
// import { Router } from "@material-ui/icons";
import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";

//IMPORTS ADMIN
import Dashboard from "./pages/admin/dashboard";
import Produto from "./pages/admin/produto";
import ProdutoEditar from "./pages/admin/produto/produto.editar";
import ProdutoCadastrar from "./pages/admin/produto/produto.cadastro";

//IMPORTS CLIENT
//import Home from "./pages/client/home"; --- esta em conflito com o home do componets
import ProdutoDetails from "./pages/client/produto/produto.details";
import { Router } from "@material-ui/icons";

export default function Routes() {
    return (
    <BrowserRouter>
        <Switch>
            {/*ROTA CLIENTE*/}
           <Route path= "/"exact component = {Login}/>
           <Router path="/produto/:idPdroduto" exact component = {ProdutoDetails}/>

           {/*ROTA ADMIN*/}
           <Router path="/admin/" exact component = {Dashboard}/>

           <Router path = "/admin/produto" exact component = {Produto}/>
           <Router path = "/admin/produto/cadastro" exact component = {ProdutoCadastrar}/>
           <Router path = "/admin/produto/editar/:idProduto" exact component = {ProdutoEditar}/>
           


                {/* <h1>pagina inicial</h1> 
                <Login />
            </Route>*/}
                <Route exact path="/home">
                    <Home />
                </Route>
                    <Route exact >
                         <div> 
                            Nao temos esse componente
                        </div>
                    </Route>
        </Switch>
     </BrowserRouter>
        

    );


}