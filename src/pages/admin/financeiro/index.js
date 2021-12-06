import *as React  from 'react';
import {createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Menu from '../../../components/menu';
import Paper from '@mui/material/Paper';
import Footer from '../../../components/footer_menu';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ButtonGroup, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const mdTheme = createTheme();

function createData(descricao, tamanho, valor_compra, valor_venda, quantidade) {
  return { descricao, tamanho, valor_compra, valor_venda, quantidade };
}

const rows = [
  createData('Vestido Rosa','P', 'R$ 35,00', 'R$ 75,00', 2 ),
  createData('Short Jeans', 'M', 'R$ 40,00', 'R$ 85,00', 3 ),
  createData('Blusinha Branca', 'G', 'R$ 45,00', 'R$ 95,00', 4),
  createData('Conjunto Florido', 'P', 'R$ 50,00', 'R$ 105,00', 5),
  createData('Vestido Lola ursinho', 'M', 'R$ 55,00', 'R$ 110,00', 6),
];

export default function FinanceiroListagem() {
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
                  <h2>Listagem de Vendas</h2>
                  <SearchIcon/>
                  <Grid item xs={12} sm={12}>
                  <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Descrição</TableCell>
            <TableCell align="center">Tamanho</TableCell>
            <TableCell align="center">Valor Compra</TableCell>
            <TableCell align="center">Valor Venda</TableCell>
            <TableCell align="center">Quantidade</TableCell>
            <TableCell align="center">Opções</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.descricao}
              </TableCell>
              <TableCell align="center">{row.tamanho}</TableCell>
              <TableCell align="center">{row.valor_compra}</TableCell>
              <TableCell align="center">{row.valor_venda}</TableCell>
              <TableCell align="center">{row.quantidade}</TableCell>
              <ButtonGroup variant="contained" aria-label="outlined primary button group">
  <Button color ="success">Atualizar</Button>
  <Button color = "error">Excluir</Button>
</ButtonGroup>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
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
