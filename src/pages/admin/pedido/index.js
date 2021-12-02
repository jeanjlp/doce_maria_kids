import * as React from 'react';
import {createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Menu from '../../../components/menu';
import Paper from '@mui/material/Paper';
import Footer from '../../../components/footer_menu';

const mdTheme = createTheme();
export default function PedidoListagem(){
    return(
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
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
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
                  <h2>Listagem de Pedidos</h2>
                  <Grid item xs={12} sm={6}>
                    Tabela
        </Grid>
                </Paper>
                 </Grid>      
            </Grid>
            <Footer sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
