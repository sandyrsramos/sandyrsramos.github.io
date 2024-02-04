"use client"
import React, { useState } from "react";
import Link from "next/link";
import { AppBar, Box, IconButton, Toolbar, Typography, Menu, MenuItem, Button, Tooltip, Avatar } from "@mui/material";
import { FlightTakeoff, Menu as MenuIcon } from "@mui/icons-material";
import information from "../data/information";

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
    <AppBar position="static" component="nav" sx={{ color: 'inherit', backgroundColor: 'inherit', position: 'fixed' }}>
      <Toolbar disableGutters>
        <FlightTakeoff sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, ml: '2rem' }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
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
          {information.initials}
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="profile pic"
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
            {information.pages.map(({ title, url }) => (
              <MenuItem key={title}>
                <Link href={url}>
                  <Typography textAlign="center">{title}</Typography>
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <FlightTakeoff sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
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
          {information.initials}
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {information.pages.map(({ title, url }) => (
            <Link key={title} href={ url }>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {title}
              </Button>
            </Link>
          ))}
        </Box>
        <Box sx={{ flexGrow: 0, mr: '2rem' }}>
          <Tooltip title="Informações Pessoais">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt={`${information.firstName} ${information.surname}`} src={ information.avatarUrl } />
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
            {information.socialPages.map(({ title, url }) => (
              <MenuItem key={title}>
                <a href={url} target="_blank">
                  <Typography textAlign="center">{title}</Typography>
                </a>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;
