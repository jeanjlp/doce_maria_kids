
// import { Router } from "@material-ui/icons";
import React from "react";
import { 
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
export default function Rotas() {
    return (
    <BrowserRouter>
       
        <Switch>
           
            <Route exact path= "/">
                {/* <h1>pagina inicial</h1> */}
                <Login />
            </Route>

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