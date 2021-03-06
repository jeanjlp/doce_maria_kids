import * as React from 'react';
import {createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Menu from '../../../components/menu';
import Footer from '../../../components/footer_menu';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const mdTheme = createTheme();
const buttonStyle = {backgroundColor: '#de61a7'}
const eventCLick = () =>{

  console.log('cliquei')
}

export default function ClienteCadastro() {
    return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex'}}>
        <Menu title = {'Clientes'}/>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={2}>
              <Grid item sm = {12}>
              <Paper
                  sx = {{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: 240,
                  }}
                >
                  <h2>Formulário de Cadastro</h2>
                  <Grid item xs={12} sm={6}>
          <TextField
            required
            id="nome"
            name="nome"
            label="Nome Completo"
            fullWidth
            autoComplete="nome"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm = {3} py = {2}>
           <TextField
            required
            id="fone"
            name="fone"
            label="Contato"
            fullWidth
            autoComplete="fone "
            variant="standard"
          />  
          </Grid> 
          <Grid item xs={12} sm = {2} py = {2}>
           <TextField
            required
            id="cpf"
            name="cpf"
            label="Cpf"
            fullWidth
            autoComplete="cpf"
            variant="standard"
          />  
        </Grid> 
        <Grid item xs={12} sm = {2} py = {2}>
           <TextField
            required
            id="data_nascimento"
            name="data_nascimento"
            label="Data Nascimento"
            fullWidth
            autoComplete="data_nascimento"
            variant="standard"
          />  
        </Grid> 
        <Grid item xs = {12}><Button variant="contained" onClick = {eventCLick} style = {buttonStyle}
         type = 'submit' color = 'primary' >Salvar</Button>
        </Grid>
                </Paper>
                </Grid>  
            </Grid>
            <Footer sx={{ pt: 4 }}/>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
