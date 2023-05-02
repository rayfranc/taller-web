import * as React from 'react';
import "@fontsource/saira-condensed/"

import {AppBar, Container, Button, Toolbar,Typography, Box, MenuItem, IconButton, Menu, Switch} from '@mui/material';
import {Menu as MenuIcon, Adb, DarkMode, LightMode}from '@mui/icons-material';



function Header({themeHandler,mode}){
    const pages = ['Services', 'Tires', 'Fleet Services','Financing', 'Coupons','Customer Reviews', 'Contact Us'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
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
    return(
    <AppBar position='static' color='primary'>
<Container maxWidth="lg">
<Toolbar disableGutters>
<Typography
            variant="h1"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Saira Condensed',
              fontWeight: 900,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize:'3rem'
            }}
          >
            BCYTYTIRES
          </Typography>
          
          <Adb sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            BCYTYTIRES
          </Typography>
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
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
          <Box sx={{flexGrow:1, display:{xs:'none', md:'flex'}}}></Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }  }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontFamily:'Saira Condensed', fontWeight:600,fontSize:15 }}
              >
                {page}
              </Button>
            ))}
             <Button sx={{my:2, mx:2, color: 'white',}} onClick={()=>themeHandler()}>{mode ?<DarkMode/>:<LightMode/>}</Button>
          </Box>
</Toolbar>
</Container>
    </AppBar>
    )
}

export default Header