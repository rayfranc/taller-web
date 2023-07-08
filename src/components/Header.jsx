import * as React from 'react';
import "@fontsource/saira-condensed/"
import './Header.css';
import { NavLink } from 'react-router-dom';

import { AppBar, Container, Button, Toolbar, Box, MenuItem, IconButton, Menu } from '@mui/material';
import { KeyboardArrowDown, Menu as MenuIcon } from '@mui/icons-material';



function Header({ themeHandler, mode }) {
  const pages = ['Tires', 'Fleet Services', 'Financing', 'Coupons', 'Customer Reviews', 'Contact Us'];
  const links = ['/tires', '/fleet-services', '/financing', '/coupons', '/customer-reviews', '/contact-us'];
  const pagesDropdown = ['Wheel Alignment', 'Computer Diagnostics', 'Oil Change Gasoline & Diesel', 'General Mechanic', 'Motorcycle Repair', 'Brakes, Rims & Rotors', 'Commercial Semi Truck Washing'];
  const linksDropdown = ['/wheel-alignment', '/computer-diagnostics', '/oil-change-gasoline-diesel', '/general-mechanic', '/motorcycle-repair', '/brakes-rims-rotors', '/commercial-semi-truck-washing'];
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [dropdownNavbar, setDropdownNavbar] = React.useState(null);

  const handleOpenDropdown = (event) => {
    setDropdownNavbar(event.currentTarget);
  };

  const handleCloseDropdown = (event) => {
    setDropdownNavbar(null);
  };


  return (
    <AppBar position='absolute'>
      <Container >
        <Toolbar disableGutters>
          <img style={{ 'height': '10vh' }}
            src={'/bcity-logo-removebg-preview.png'}
            srcSet={`/bcity-logo-removebg-preview.png`}
            alt='Bcity-logo'
            loading="lazy"
          />

          <span style={{ display: { xs: 'flex', md: 'none' }, mr: 1, flexGrow: 1 }} />

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
              <MenuItem>
                <NavLink className={({ isActive }) => `navLink ${isActive ? 'active' : ''}`} to='/'>
                  <Button
                    sx={{ color: 'white', display: 'block', fontFamily: 'Saira Condensed', fontWeight: 600, fontSize: 15 }}>
                    Home
                  </Button>
                </NavLink>
              </MenuItem>
              <MenuItem>
                <Button
                  onClick={handleOpenDropdown}
                  endIcon={<KeyboardArrowDown />}
                  sx={{ my: 2, color: 'white', fontFamily: 'Saira Condensed', fontWeight: 600, fontSize: 15 }}>
                  Services
                </Button>
                <Menu
                  id='menu-dropdown'
                  anchorEl={dropdownNavbar}
                  open={Boolean(dropdownNavbar)}
                  onClose={handleCloseDropdown}
                >
                  {
                    pagesDropdown.map((page) => (
                      <NavLink key={page} className={({ isActive }) => `navLink ${isActive ? 'active' : ''}`} to={linksDropdown[pagesDropdown.indexOf(page)]}>
                        <Button
                          key={page}
                          sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'Saira Condensed', fontWeight: 600, fontSize: 15 }}>
                          {page}
                        </Button>
                      </NavLink>
                    ))
                  }
                </Menu>
              </MenuItem>
              {
                pages.map((page) => (
                  <MenuItem
                    key={page}>
                    <NavLink key={page} className={({ isActive }) => `navLink ${isActive ? 'active' : ''}`} to={links[pages.indexOf(page)]}>
                      <Button
                        sx={{ color: 'white', display: 'block', fontFamily: 'Saira Condensed', fontWeight: 600, fontSize: 15 }}>
                        {page}
                      </Button>
                    </NavLink>
                  </MenuItem>
                ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <NavLink className={({ isActive }) => `navLink ${isActive ? 'active' : ''}`} to='/'>
              <Button
                aria-controls='menu-dropdown'
                sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'Saira Condensed', fontWeight: 600, fontSize: 15 }}>
                Home
              </Button>
            </NavLink>
            <Button
              onClick={handleOpenDropdown}
              endIcon={<KeyboardArrowDown />}
              sx={{ my: 2, color: 'white', fontFamily: 'Saira Condensed', fontWeight: 600, fontSize: 15 }}>
              Services
            </Button>
            <Menu
              id='menu-dropdown'
              anchorEl={dropdownNavbar}
              open={Boolean(dropdownNavbar)}
              onClose={handleCloseDropdown}
            >
              {
                pagesDropdown.map((page) => (
                  <NavLink key={page} className={({ isActive }) => `navLink ${isActive ? 'active' : ''}`} to={linksDropdown[pagesDropdown.indexOf(page)]}>
                    <Button
                      key={page}
                      sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'Saira Condensed', fontWeight: 600, fontSize: 15 }}>
                      {page}
                    </Button>
                  </NavLink>
                ))
              }
            </Menu>
            {
              pages.map((page) => (
                <NavLink key={page} className={({ isActive }) => `navLink ${isActive ? 'active' : ''}`} to={links[pages.indexOf(page)]}>
                  <Button
                    key={page}
                    sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'Saira Condensed', fontWeight: 600, fontSize: 15 }}>
                    {page}
                  </Button>
                </NavLink>
              ))
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header