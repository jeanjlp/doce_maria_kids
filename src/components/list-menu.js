import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import {GiClothes, GiMoneyStack } from "react-icons/gi";
import PeopleIcon from '@mui/icons-material/People';
import {BsCardChecklist, BsFacebook} from "react-icons/bs";
import { RiInstagramFill} from "react-icons/ri";
import ExitToApp from '@mui/icons-material/ExitToApp';
import {GrCatalog } from "react-icons/gr";


export const mainListItems = (
  <div>
    <ListItem button component = "a" href = "/admin">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard"/>
    </ListItem>
    <ListItem button component = "a"  href = "/admin/produto/cadastro">
      <ListItemIcon>
        <GiClothes/>
      </ListItemIcon>
      <ListItemText primary="Vestuário"/>
    </ListItem>
    <ListItem button component = "a" href = "/admin/cliente/cadastro">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Clientes" />
    </ListItem>
    <ListItem button component = "a" href = "/admin/pedido/cadastro"> 
      <ListItemIcon>
        <BsCardChecklist/>
      </ListItemIcon>
      <ListItemText primary="Pedidos" />
    </ListItem>
    <ListItem button component = "a" href = "/admin/financeiro/cadastro">
      <ListItemIcon>
      <GiMoneyStack/>
      </ListItemIcon>
      <ListItemText primary="Financeiro" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Plataformas</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <BsFacebook/>
      </ListItemIcon>
      <ListItemText primary="Facebook" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <RiInstagramFill/>
      </ListItemIcon>
      <ListItemText primary="Instagram" />
    </ListItem>
    <ListItem button component = "a" href = "/admin/catalago/cadastro">
      <ListItemIcon>
        <GrCatalog/>
      </ListItemIcon>
      <ListItemText primary="Catálago" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ExitToApp/>
      </ListItemIcon>
      <ListItemText primary="Sair" />
    </ListItem>
  </div>
);