import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import PersonIcon from '@mui/icons-material/Person';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
// import { Button, ListItemIcon } from '@mui/material';




import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


const drawerWidth = 220;
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  borderRight: '3px solid #cccccc',
  background: 'linear-gradient(180deg,#2c618a 0,#1b3d58)',
    transition: 'margin-left .3s'
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(0)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(0)} + 1px)`,
  },
  borderRight: '3px solid #cccccc',
    backgroundColor: '#1b3e59',
    transition: 'margin-left .3s'
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
    borderRight: '3px solid #cccccc',
    backgroundColor: '#1b3e59',
    transition: 'margin-left .3s'
  }),
);


function Topbar() {
  
  const [open, setOpen] = React.useState(true);
  const [navWidth, setNavWidth] = React.useState('220px');

  const handleDrawerOpen = () => {
    setNavWidth('220px');
  };

  const handleDrawerClose = () => {
    setNavWidth('0px');
  };
    
   // Getting user info from localStorage
   let user = localStorage.getItem('email');
   // console.log('User',user);
 
   // Logout onClick
   const navigateToLoginPage = useNavigate();
 
   const logOut = () => {
     localStorage.clear();
     navigateToLoginPage('/');
   };
   
  const menuItems = [
    {'text':'Home', 'icon': <HomeIcon />, 'link': '/registration'},
    {'text':'New Cases', 'icon': <HomeIcon />, 'link': '/registration'},
    {'text':'Draft Cases', 'icon': <HomeIcon />, 'link': '/registration'},
    {'text':'Pending Cases', 'icon': <HomeIcon />, 'link': '/registration'},
    {'text':'Completed Cases', 'icon': <HomeIcon />, 'link': '/registration'},
    {'text':'Other Cases', 'icon': <HomeIcon />, 'link': '/registration'},
    {'text':'Profile', 'icon': <HomeIcon />, 'link': '/registration'}
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar  component="nav" sx={{background: 'linear-gradient(180deg,#2c618a 0,#1b3d58)', zIndex:9999, borderBottom: '3px solid #cccccc' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={navWidth === '0px' ? handleDrawerOpen : handleDrawerClose }
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block'} }}>
            <img src='https://globalipco.com/ip-online/assets/images/navbarImages/gl_logo.png' style={{width:'310px', verticalAlign: 'middle'}} /> 
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'block', sm: 'none' } }}>
              <img src='https://globalipco.com/ip-online/assets/images/navbarImages/gl_logoShort.png' style={{width:'150px', verticalAlign: 'middle'}} />
          </Box>

          <IconButton sx={{ display: { xs: 'none', md: 'block', color: 'white', fontSize: 'medium' , pr: 2} }}>
            <PersonIcon fontSize='medium' text-transform = 'lowercase !important' sx={{verticalAlign: 'middle'}} /> {user}
          </IconButton>
          <Box sx={{ flexGrow: 0, borderLeft: '1px solid black', pl:2 }}>
            <IconButton sx={{ p: 0 }} onClick={logOut}>
              <PowerSettingsNewIcon sx={{color:'white'}}  />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} sx={{ display: {xs:'none', sm:'block'} }}>
        <List sx={{mt:'75px'}}>
          <ListItem key='search' disablePadding sx={{ display: 'block' }}>
            <Paper
              component="form"
              sx={{ ml:2, mb:2, alignItems: 'center', width: '70%' }}
            >
              
              <InputBase
                sx={{ flex: 1, bgcolor:'#ccd8e4',
                  padding: '2px',
                  borderRadius: '5px',
                  mb: '0',
                  fontSize: '13px',
                  color: '#102d45',
                  border: '1px solid #ccd8e4',
                  width: '100%',
                  boxSizing: 'border-box',
                  outline: 'none' }}
                placeholder="Search cases"
                
              />
              <IconButton type="button" sx={{ p: '2px', color:'black', bgcolor:'#ccd8e4','&:hover':{bgcolor:'#ccd8e4'}, ml:1 }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
            <Divider />
          </ListItem>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <Link to={item.link}>
                <ListItemButton
                  sx={{
                    minHeight: 10,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                        color:'white'
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 , color:'white'}} />
                </ListItemButton>
                <Divider />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box sx={{height: '100%', width: navWidth, position: 'fixed',
  zIndex: 1,
  top: 0,
  left: 0,
  background: 'linear-gradient(180deg,#2c618a 0,#1b3d58)',
  borderRight: '3px solid #cccccc',
  overflowX: 'hidden',
  transition: '0.5s',
  paddingTop: '60px', display: {xs:'block', sm:'none'}}}>
        <Typography variant='h1'>Umar</Typography>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        
      </Box>     
    </Box>
  );
}

export default Topbar;
