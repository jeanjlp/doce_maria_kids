import React from 'react';
import { BrowserRouter }from "react-router-dom";
import Login from "./components/login";
import { Home, Router } from "@material-ui/icons";
import {Switch} from "react-router-dom";
function App() {
  return(
  <div className = "App">
    <BrowserRouter>
   <Switch>
            <Router path= "/">
                <h1>pagina inicial</h1>

            </Router>
            <Router path= "/login">
                <Login></Login>

            </Router>

        </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
