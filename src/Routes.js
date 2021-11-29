
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
import Cliente from './pages/admin/cliente';
import ClienteEditar from "./pages/admin/cliente/cliente.editar";
import ClienteCadastro from "./pages/admin/cliente/cliente.cadastro";

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

           <Router path = "/admin/cliente" exact component = {Cliente}/>
           <Router path = "/admin/cliente/cadastro" exact component = {ClienteCadastro}/>
           <Router path = "/admin/cliente/editar/:idCliente" exact component = {ClienteEditar}/>
           
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