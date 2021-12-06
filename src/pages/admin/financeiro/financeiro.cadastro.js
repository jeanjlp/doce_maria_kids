import *as React  from 'react';
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
const buttonStyle = {backgroundColor: '#de61a7'}

const metodoPagamento = [
  { label: 'à vista' },
  { label: 'crediario' },
  { label: 'cartão' },
];

const eventCLick = () =>{

  console.log('cliquei')
}

export default function FinanceiroCadastro() {
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex'}}>
        <Menu title = {'Financeiro'}/>
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
                  <h2>Registro de Venda</h2>
                  <Grid item xs={12} sm={2}>
          <TextField
            required
            id="produto_id"
            name="produto_id"
            label="Código Produto"
            fullWidth
            autoComplete="produto_id"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm = {2} py = {2}>
           <TextField
            required
            id="cliente_id"
            name="cliente_id"
            label="Código Cliente"
            fullWidth
            autoComplete="cliente_id "
            variant="standard"
          />  
          </Grid> 
          <Grid intem sm = {2} py = {2}>
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
          <Grid intem sm = {2} py = {2}>
           <TextField
            required
            id="subtotal_produtos"
            name="subtotal_produtos"
            label="Subtotal dos Produtos"
            fullWidth
            autoComplete="subtotal_produtos"
            variant="standard"
          />  
          </Grid>
          <Grid intem sm = {2} py = {2}>
           <TextField
            required
            id="desconto"
            name="desconto"
            label="Desconto"
            fullWidth
            autoComplete="desconto"
            variant="standard"
          />  
          </Grid>
          <Grid intem xs={12} sm = {6} py = {2}>
           <Autocomplete
  disablePortal
  id="combo-box-demo"
  options={metodoPagamento}
  sx={{ width: 210 }}
  renderInput={(params) => <TextField {...params} label="Metodo de Pagamento" />}
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
