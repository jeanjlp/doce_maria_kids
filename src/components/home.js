import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import imgHome from '../assets/img/produto.png';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="linkedin.com/in/jean-lucas-pereira-a7497970">
        Jean Lucas Pereira
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
    
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6), 
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    height: 0,
    paddingTop: '100%', // 16:9
    marginTop:'30'
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: '#de61a7',
    padding: theme.spacing(6),
  },
  superior:{
    backgroundColor:'#de61a7',
  },
}));

const cards = [1, 2, 3, 4, 5, 6];

export default function Album() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" className={classes.superior}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Doce Maria Kids
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Fique a vontade!
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            A Doce Maria Kids tem como filosofia vestir meninos e meninas que buscam sofisticação, conforto e muito estilo.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  {/* <Button variant="contained" color="primary">
                    Main call to action
                  </Button> */}
                </Grid>
                <Grid item>
                  {/* <Button variant="outlined" color="primary">
                    Secondary action
                  </Button> */}
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
 
                      image={imgHome}
                     title="Coleção"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Coleçao Verão
                    </Typography>
                    <Typography>
                      Vestido de usinho, Tamanho 12
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                     <a target="_blank" href="https://api.whatsapp.com/send?phone=5554999415572">Solicitar Pedido</a>
                    </Button>
                    <Button size="small" color="primary">
                    <a target="_blank" href="https://www.facebook.com/groups/573199143445445">Facebook</a>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Doce Maria Kids
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Todos os direitos reservados!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}