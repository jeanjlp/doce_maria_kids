//import * as React from 'react';
import React, { useState} from "react";
import { useHistory } from "react-router-dom";
import {createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Menu from '../../../components/menu';
import Footer from '../../../components/footer_menu';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { Button} from '@mui/material';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


import Autocomplete from '@mui/material/Autocomplete';
//import { RiNavigationFill } from 'react-icons/ri';

const mdTheme = createTheme();
const buttonStyle = {backgroundColor: '#de61a7'}

const tamanhoVestuario = [
  {label: 'RN'},
  { label: 'P' },
  { label: 'M' },
  { label: 'G' },
  { label: 'GG'},
  { label: '1'},
  { label: '2'},
  { label: '3'},
  { label: '4'},
  { label: '5'},
  { label: '6'},
  { label: '7'},
  { label: '8'},
  { label: '9'},
  { label: '10'},
  { label: '11'},
  { label: '12'},
  { label: '13'},
  { label: '14'},
  { label: '15'},
  { label: '16'},
];

const eventCLick = () =>{

  console.log('cliquei')
}

export default function ProdutoCadastro() {
  const [descricao, setDescricao] = useState(null);
  const [tamanho, setTamanho] = useState(null);
  const [valor_compra, setValorCompra] = useState(null);
  const [valor_venda, setValorVenda] = useState(null);
  const [quantidade, setQuantidade] = useState(null);
  const history = useHistory();
  
  
  const eventCLick = () => {
        
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          descricao,  
          tamanho,
          valor_compra,
          valor_venda,
          quantidade
        }),
    };
    fetch('http://localhost:5000/produto', requestOptions)
         .then(function (response) {
            if (response.status == 201) {
                history.push('/admin/produto');
             } else {
                 alert("Erro ao cadastrar produto");
            }
         });


}

  const onTamanhoChange = (evt, novoValor) =>{
    setTamanho(novoValor.label)
  }

  const onChangeDescricao = (evt) =>{
    setDescricao(evt.target.value)  
  }

  const onChangeValorCompra = (evt) =>{
    setValorCompra(evt.target.value)  
  }

  const onChangeValorVenda = (evt) =>{
    setValorVenda(evt.target.value)  
  }

  const onChangeQuantidade = (evt) =>{
    setQuantidade(evt.target.value)  
  }

    return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex'}}>
        <Menu title = {'Vestu??rio'}/>
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
                  <h2>Formul??rio de Cadastro</h2>
                  <Grid item xs={12} sm={12}>
           <TextField
            required
            id="descricao"
            name="descricao"
            label="Descri????o"
            fullWidth
            autoComplete="descricao"
            variant="standard"
            value={descricao}
                   onChange={onChangeDescricao}
           />
           </Grid>
            <Grid intem xs={12} sm = {6} py = {2}>
           <Autocomplete
           disablePortal
            id="combo-box-demo"
            options={tamanhoVestuario}
            onChange={onTamanhoChange}
            sx={{ width: 115 }}
            renderInput={(params) => <TextField {...params} label="Tamanho" />}
            />
            </Grid>
           <Grid intem xs={12} sm = {6} py = {2}>
           <TextField
            required
            id="valor_compra"
            name="valor_compra"
            label="Valor de Compra"
            fullWidth
            autoComplete="valor_compra"
            variant="standard"
            value={valor_compra}
                   onChange={onChangeValorCompra}
            />  
            <Grid intem py = {2}>
           <TextField
            required
            id="valor_venda"
            name="valor_venda"
            label="Valor de Venda"
            fullWidth
            autoComplete="valor_venda"
            variant="standard"
            value={valor_venda}
                   onChange={onChangeValorVenda}
           />  
            </Grid>
           <Grid intem py = {2}>
           <TextField
            required
            id="quantidade"
            name="quantidade"
            label="Quantidade"
            fullWidth
            autoComplete="quantidade"
            variant="standard"
            value={quantidade}
                   onChange={onChangeQuantidade}
            />  
            </Grid>
            <Grid intem xs = {12} sm = {12} py = {1}>
           <Button
                variant="contained"
                component="label"
                style={buttonStyle}
              >
                Upload File
                <input
                  type="file"
                  hidden
                />
              </Button> 
              <FormGroup>
                  < FormControlLabel disable control={<Checkbox/>} label="Facebook" />
              </FormGroup> 
              </Grid>
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