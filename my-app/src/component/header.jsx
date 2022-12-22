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



function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const pages = ['HOME', 'PORTFOLIO', 'ABOUT US', 'WORKFLOW', 'PRICES', 'IMPRESSUM'];
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
    <AppBar position="absolute" sx={{ justifyContent: 'center' , fontFamily: ['Impact', 'cursive'].join(','), height: 81, background: 'inherit', position: "absolute"}}>
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
