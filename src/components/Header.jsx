import * as React from 'react';
import "@fontsource/saira-condensed/"

import {AppBar, Container, Button, Toolbar,Typography, Box, MenuItem, IconButton, Menu} from '@mui/material';
import {Menu as MenuIcon}from '@mui/icons-material';



function Header({themeHandler,mode}){
    const pages = ['Services', 'Tires', 'Fleet Services','Financing', 'Coupons','Customer Reviews', 'Contact Us'];
    const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


    return(
    <AppBar position='absolute' color='primary'>
<Container >
<Toolbar disableGutters>
        <img style={{'height':'10vh'}}
        src={'/bcity-logo-removebg-preview.png'}
        srcSet={`/bcity-logo-removebg-preview.png`}
        alt='Bcity-logo'
        loading="lazy"
      />
          
          <span style={{ display: { xs: 'flex', md: 'none' }, mr: 1, flexGrow:1 }} />  
        
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
             
          </Box>
</Toolbar>
</Container>
    </AppBar>
    )
}

export default Header