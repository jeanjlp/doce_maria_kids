import React from "react";
import { Avatar, Grid, Paper, TextField, Button } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { BrowserRouter } from "react-router-dom";

const Login = () => {

    const paperStyle = {padding: 20, height: '70vh', width: 260, margin: '20px auto'}
    const avatarStyle = {backgroundColor: '#e92f5a'}
    const buttonStyle = {backgroundColor: '#e92f5a'}
    return(
        <Grid>
            <Paper elevation = {10} style = {paperStyle}>
            <Grid align= 'center'>
                <Avatar style = {avatarStyle}><LockOutlinedIcon/></Avatar>
                <h2>Doce Maria Kids</h2>
                </Grid>
                <TextField label = 'Usuário'placeholder = 'usuario' fullWidth />
                <TextField label = 'Senha'placeholder = 'senha de acesso' type = 'password' fullWidth />
                <FormControlLabel
                control = {
                    <Checkbox
                    name = "checkedB"
                    color = "primary"
                    />
                }
                label = "lembre-me"
                />
                <Button style = {buttonStyle} type = 'submit' color = 'primary' variant = "contained" fullWidth>
                    <BrowserRouter>Entrar</BrowserRouter>
                    </Button>
            </Paper>
        </Grid>

    )
}

export default Login