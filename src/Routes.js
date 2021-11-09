
import { Router } from "@material-ui/icons";
import React from "react";
import {Switch} from "react-router-dom";
import Login from "./components/login";

export default function Rotas () {
    return(
        <Switch>
            <Router path= "/">
                <h1>pagina inicial</h1>

            </Router>
            <Router path= "/login">
                <Login></Login>

            </Router>

        </Switch>

    );
    

}