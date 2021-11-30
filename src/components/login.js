import React from "react";
import { Avatar, Grid, Paper, TextField, Button } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useHistory } from "react-router-dom";
//import '../assets/css/login.css';

const Login = () => {

    const paperStyle = {padding: 20, height: '70vh', width: 260, margin: '20px auto', backgroundColor:'#fae3eb', color:'#a4949c'}
    const avatarStyle = {backgroundColor: '#de61a7'}
    const buttonStyle = {backgroundColor: '#de61a7'}
    const h2Style = {color:'#de61a7'}
    const h3Style = {color:'#a4949c', fontSize:12}
    //const label1 = {color: '#a4949c'}
    
    const history = useHistory();
    const eventCLick = () =>{

        console.log('cliquei')
        history.push('/home')
    }
    return(
        <Grid>
            <Paper elevation = {10} style = {paperStyle}>
            <Grid align= 'center'>
                <Avatar style = {avatarStyle}><LockOutlinedIcon/></Avatar>
                <h2 style = {h2Style}> Doce Maria Kids </h2>
                <h3 style = {h3Style}> MODA INFANTIL </h3> 
                </Grid>
                <TextField label = 'Usuário'placeholder = 'usuario' fullWidth />
                <TextField label = 'Senha'placeholder = 'senha de acesso' type = 'password' fullWidth />
                <FormControlLabel
                control = {
                    <Checkbox
                    name = "checkedB"
                    color = "#a4949c"
                    />
                }
                label = "lembre-me"
                />
                <Button onClick={eventCLick} style = {buttonStyle} type = 'submit' color = 'primary' variant = "contained" fullWidth > Entrar </Button>
            
            </Paper>
        </Grid>

    )
}

export default Login