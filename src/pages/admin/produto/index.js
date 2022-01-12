import  React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
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



export default function ProdutoListagem() {
   const [produtos, setProdutos] = useState([]);
   const [produtoId, setProdutoId] = useState(null);
   const history = useHistory();

   useEffect(
    () => {
      fetch('http://localhost:5000/produto').
      then(r => r.json()).
      then (dados => setProdutos(dados))
    },[produtoId]);
 

    const removeProduto = (id) =>{
      const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }       
    };
    fetch(`http://localhost:5000/produto/${id}`, requestOptions)
         .then(function (response) {
            if (response.status == 200) {
                setProdutoId(id);
             } else {
                 alert("Erro ao remover produto");
            }
         });


    }

    


   return (
  <ThemeProvider theme={mdTheme}>
    <Box sx={{ display: 'flex'}}>
       <Menu title = {'Produtos'}/>
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
                  <h2>Listagem de Produtos</h2>
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
          {produtos.map((row) => (
            <TableRow
              key={row.descricao}
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
  <Button color = "error" onClick={() => removeProduto(row.id)}>Excluir</Button>
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
