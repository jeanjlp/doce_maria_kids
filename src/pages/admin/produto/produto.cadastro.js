import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function ProdutoCadastrar() {
  return (
    <div>
      <h1>Cadastro de Produtos</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="descricao"
            name="descricao"
            label="Descrição"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="tamanho"
            name="tamanho"
            label="Tamanho"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
      </Grid>
    </div>
  );
}
