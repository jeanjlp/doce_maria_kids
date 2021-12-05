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
import Autocomplete from '@mui/material/Autocomplete';

const mdTheme = createTheme();

const tamanhoVestuario = [
  { label: 'P' },
  { label: 'M' },
  { label: 'G' },
];

const buttonStyle = {backgroundColor: '#de61a7'}
const eventCLick = () =>{

  console.log('cliquei')
}

export default function PedidoCadastro() {
    return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex'}}>
        <Menu title = {'Pedidos'}/>
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
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4}}>
            <Grid container spacing={3}>
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
                  <Grid item xs={12} sm={2}>
          <TextField
            required
            id="ref"
            name="ref"
            label="Referencia"
            fullWidth
            autoComplete="ref"
            variant="standard"
          />
        </Grid>
                  <Grid item xs={12} sm={6} py = {2}>
          <TextField
            required
            id="descricao"
            name="descricao"
            label="Descrição"
            fullWidth
            autoComplete="descricao"
            variant="standard"
          />
        </Grid>
        <Grid intem xs={12} sm = {6} py = {2}>
           <Autocomplete
  disablePortal
  id="combo-box-demo"
  options={tamanhoVestuario}
  sx={{ width: 115 }}
  renderInput={(params) => <TextField {...params} label="Tamanho" />}
/>
          </Grid>
          <Grid intem xs={12} sm = {2} py = {2}>
           <TextField
            required
            id="quantidade"
            name="quantidade"
            label="Quantidade"
            fullWidth
            autoComplete="quantidade"
            variant="standard"
          />  
          </Grid>
          <Grid item xs={12} sm={2} py = {2}>
          <TextField
            required
            id="valor_entrada"
            name="valor_entrada"
            label="Valor Entrada"
            fullWidth
            autoComplete="valor_entrada"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={2} py = {2}>
          <TextField
            required
            id="valor_total_pedido"
            name="valor_total_pedido"
            label="Valor Total"
            fullWidth
            autoComplete="valor_total_pedido"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={2} py = {2}>
          <TextField
            required
            id="previsao_entrega"
            name="previsao_entrega"
            label="Previsao Entrega"
            fullWidth
            autoComplete="previsao_entrega"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={2} py = {2}>
          <TextField
            required
            id="data_pedido"
            name="data_pedido"
            label="Data Pedido"
            fullWidth
            autoComplete="data_pedido"
            variant="standard"
          />
        </Grid>
        <Grid intem xs = {12} sm = {6}><Button variant="contained" onClick = {eventCLick} style = {buttonStyle}
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