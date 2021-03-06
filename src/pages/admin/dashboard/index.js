 import * as React from 'react';
 import {createTheme, ThemeProvider } from '@mui/material/styles';
 import Box from '@mui/material/Box';
 import Toolbar from '@mui/material/Toolbar';
 import Container from '@mui/material/Container';
 import Grid from '@mui/material/Grid';
 import Menu from '../../../components/menu';
 import ImgAdmin from '../../../assets/img/fundo.png';
 import Footer from '../../../components/footer_menu';

 const mdTheme = createTheme();
 
 export default function Dashboard() {
    return (
   <ThemeProvider theme={mdTheme}>
     <Box sx={{ display: 'flex'}}>
        <Menu title = {'Dashboard'} />
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
               <img alt = "logo marca Doce Maria Kids" src = {ImgAdmin}/> 
             </Grid>
             <Footer sx={{ pt: 4 }} />
           </Container>
         </Box>
       </Box>
     </ThemeProvider>
   );
 }
