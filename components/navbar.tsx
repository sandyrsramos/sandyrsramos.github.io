"use client"
import { AppBar, Box, IconButton, Toolbar, Typography, Menu, MenuItem, Button, Tooltip, Avatar } from "@mui/material";
import { FlightTakeoff, Menu as MenuIcon } from "@mui/icons-material";
import React, { useState } from "react";

const pages = [{ title: "Eventos", url: "/eventos" }, { title: "Currículo", url: "/home" }];
const socialPages = [{ title: "LinkedIn", url: "https://www.linkedin.com/in/sandyram0s/"}]

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" component="nav" sx={{ color: 'inherit', backgroundColor: 'inherit', position: 'sticky' }}>
      <Toolbar disableGutters>
        <FlightTakeoff sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, ml: '2rem' }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none'
          }}
        >
          SR
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="sandy ramos profile pic"
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
              display: { xs: 'block', md: 'none' }
            }}
          >
            {pages.map(({ title, url }) => (
              <MenuItem key={title} onClick={() => console.log(url)}>
                <Typography textAlign="center">{title}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <FlightTakeoff sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/home"
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none'
          }}
        >
          SR
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map(({ title, url }) => (
            <Button
              key={title}
              onClick={() => console.log(url)}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {title}
            </Button>
          ))}
        </Box>
        <Box sx={{ flexGrow: 0, mr: '2rem' }}>
          <Tooltip title="Informações Pessoais">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Sandy Ramos" src="https://media.licdn.com/dms/image/D4D03AQH3Egups8_h5A/profile-displayphoto-shrink_800_800/0/1698688879682?e=1712793600&v=beta&t=wME_26dD75yUd1oFDx8iAfKNb7g6rJxrTsnOzGdR0dk" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {socialPages.map(({ title, url }) => (
              <MenuItem key={title} onClick={() => console.log(url)}>
                <Typography textAlign="center">{title}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;
