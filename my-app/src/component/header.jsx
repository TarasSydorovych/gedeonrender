import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../assets/logo/logo.png'
import { CardMedia, Card} from '@mui/material';
import { useState } from 'react';
import { useRef,useEffect } from 'react';

function Header({background}) {
  console.log(background)
const appBarStyleFirst = { justifyContent: 'center' , fontFamily: ['Impact', 'cursive'].join(','), height: 81, background: `${background}`,};
const appBarStyleW = { justifyContent: 'center' , fontFamily: ['Impact', 'cursive'].join(','), height: 81, background: '#e8eaea',};
const appBarStyleTwo =   { justifyContent: 'center' , fontFamily: ['Impact', 'cursive'].join(','), height: 81, background: '#e8eaea',};
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [styleAppBar, setStyleAppBar] = useState(appBarStyleFirst);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
const navRef = useRef();
const isBackgroundWhite = true;
navRef.current = styleAppBar;
  const pages = ['HOME', 'PORTFOLIO', 'ABOUT US', 'WORKFLOW', 'PRICES', 'IMPRESSUM'];
useEffect(()=>{

const handlscroll = () => {

  const show  = window.scrollY > 640;
  
  console.log(document.getElementsByClassName('headerCheck')[0]);
 
  if(show) {
    setStyleAppBar(appBarStyleTwo)
  }else{
    if(isBackgroundWhite){

    }
    setStyleAppBar(appBarStyleFirst)
  }

}
function ready() {
  alert('DOM is ready');

}
document.addEventListener('scroll', handlscroll)

return () => {
  document.removeEventListener('scroll', handlscroll)
 
}
}, [background])

  const listStyle = {
    
    height: 80,
    display: 'flex',
    alignSelf: 'center',
    my: 2, 
    color: '#fdfdfd', 
     
    fontSize: 13, 
    fontFamily: ['Quicksand', 'sans-serif'].join(','), 
    fontWeight: 'bold'
      }
      const mouseEnter = (e) => {
        e.target.style.borderBottom = 'ridge #05c495';
      }
      const mouseLeave = (e) => {
        e.target.style.borderBottom = 'none';
      }
  return ( 
    <AppBar className='headerCheck' style={navRef.current}>
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           
            <CardMedia 
       component='img'
        sx={{margin: 0}}
        autoPlay 
        src={Logo}
      />
      
          </Typography>

          <Box sx={{ margin: 0, flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                marginRight: 200,
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              margin: 0,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{marginLeft: 13, flexGrow: 1,  display: { xs: 'none', md: 'flex' } }}>
          
          {pages.map((el) => {
          return  <MenuItem  style={listStyle}
           onMouseEnter={mouseEnter}
           onMouseLeave={mouseLeave} 
          >{el}</MenuItem>
          })}
          
          
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button sx={{background: 'black', borderRadius: '20px', color: 'white', width: '20vh'}}>
                Contacts
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
