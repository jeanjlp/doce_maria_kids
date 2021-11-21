import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@mui/material-ui/core/CssBaseline';
import Drawer from '@mui/material-ui/core/Drawer';
import Box from '@mui/material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@mui/material-ui/core/Toolbar';
import List from '@mui/material-ui/core/List';
import Typography from '@mui/material-ui/core/Typography';
import Divider from '@mui/material-ui/core/Divider';
import IconButton from '@mui/material-ui/core/IconButton';
import Badge from '@mui/material-ui/core/Badge';
import Container from '@mui/material-ui/core/Container';
import Grid from '@mui/material-ui/core/Grid';
import Link from '@mui/material-ui/core/Link';
import MenuIcon from '@mui/icons-material-ui/icons/Menu';
import ChevronLeftIcon from '@mui/icons-material-ui/icons/ChevronLeft';
import NotificationsIcon from '@mui/icons-material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from '../../../components/menu';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root:{
    display: 'flex',
  },
  toolbar:{
    paddingRight: 24,
  },
  toolbar: {
    display: 'flex',
    alignItems:'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer +1,
    transition: theme.transitions.create(['width','margin'],{
      easing:theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        marginLeft: drawerWidth,
        width: 'calc(100% - ${drawerWidth}px)',
        transition: theme.transitions.create(['width','margin'],{
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton:{
        marginRight:36,
      },
      menuButtonHidden:{
        display: 'none'
      },
      title:{
        flexGrow: 1,
      },
      drawerPaper:{
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width',{
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawerPaperClose:{
        overflowX: 'hidden',
        transition: theme.transitions.create('width',{
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]:{
          width: theme.spacing(9),
        },
      },
      appBarSpacer: theme.mixins.toolbar,
      content: {
        flexGrow: 1,
        height:'100vh',
        overflow:'auto',
      },
      container:{
        paddingTop:theme.spacing(4),
        paddingBottom:theme.spacing(4),
      },
      paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow:'auto',
        flexDirection:'column',
      },
      fixedHeight:{
        height:240,
      },
    }));
    
export default function Dashboard(){
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const  handleDrawerOpen = ()=>{
    setOpen(true);
  };
  const handleDrawerClose = ()=>{
    setOpen(false);
  };
  const fixedHeightPaper = clsx (classes.paper, classes.fixedHeight);

  return(
    <div className={classes.root}>
      <CssBaseline/>
      <AppBar position = "absolute"className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon/>
          </IconButton>
          <Typography component = "h1" variant = "h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon/>
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

    </div>
  )
}
    

{/*
}) styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>
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
          <Toolbar
          paper:
          }}
          open = {open}
          >
            <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon/>
            </IconButton>
            </div>
            <Divider/>
          <List>{mainListItems}</List>
          <Divider/>
          <List>{secondaryListItems}</List>
          </Drawer>
          <main className={classes.content}>
          <div className={classes.appBarSpacer}/>
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>  
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  
  return <DashboardContent />;

  </Grid>
  <Box pt = {4}>
  <Copyright/>
  </Box>
  </Container>
  </main>
  </div>
  );
}
