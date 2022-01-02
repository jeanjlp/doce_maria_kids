import React from "react";
//import React,{useState,useEffect} from "react";
import { Avatar, Grid, Paper, TextField, Button } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useHistory } from "react-router-dom";
//import '../assets/css/login.css';


const Login = () => {

    //const[usuario, setUsuario] = useState('');
    //const [senha, setSenha] = useState('');

    const paperStyle = {padding: 20, height: '70vh', width: 260, margin: '20px auto', backgroundColor:'#fae3eb', color:'#a4949c'}
    const avatarStyle = {backgroundColor: '#de61a7'}
    const buttonStyle = {backgroundColor: '#de61a7'}
    const h2Style = {color:'#de61a7'}
    const h3Style = {color:'#a4949c', fontSize:12}
    //const label1 = {color: '#a4949c'}
    
    const history = useHistory();
    const eventCLick = () =>{
        // let usuario = new FormData(document.getElementById('usuario'));
        // let senha = new FormData(document.getElementById('senha'));
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //        usuario:{usuario},
        //        senha: {senha}
             
        //     })
        //   };
    //       fetch('http://localhost:5000/valida-login', requestOptions)
    //       .then(function(response) {
    //         if (response.status === 200) {
              history.push('/admin')
    //         } else {
    //             alert("invalido");
    //         }
    //       });
        console.log('cliquei')
       
     }
    return(
        <Grid>
            <Paper elevation = {10} style = {paperStyle}>
            <Grid align= 'center'>
                <Avatar style = {avatarStyle}><LockOutlinedIcon/></Avatar>
                <h2 style = {h2Style}> Doce Maria Kids </h2>
                <h3 style = {h3Style}> MODA INFANTIL </h3> 
                </Grid>
                <TextField label = 'Usuário' placeholder = 'usuario' fullWidth  
                 //value={usuario} onChange = {e => setUsuario(e.target.value)} 
                />
                <TextField label = 'Senha'placeholder = 'senha de acesso' type = 'password' fullWidth 
                //value={senha} onChange = {e => setSenha(e.target.value)}
                 />
                <FormControlLabel
                control = {
                    <Checkbox
                    name = "checkedB"
                    color = "#a4949c"
                    />
                }
                label = "lembre-me"
                />
                <Button onClick = {eventCLick} style = {buttonStyle} type = 'submit' color = 'primary' variant = "contained" fullWidth > Entrar </Button>
            
            </Paper>
        </Grid>
    )
}
export default Login