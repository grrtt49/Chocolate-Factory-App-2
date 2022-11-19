import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import LogInMenu from './LogInMenu';
import SignUpMenu from './SignUpMenu';
import AccountMenu from './AccountMenu';
import { useNavigate } from 'react-router-dom';

const pages = [{title: 'Home', url: ''}, {title: 'Schedule an appointment', url: 'schedule'}, {title: 'Reviews', url: 'reviews'}];

export default function ResponsiveAppBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isLoginView, setIsLoginView] = React.useState(true);

  const { login, signUp, logOut, username } = props;

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (url) => {
    if(url != null) {
      navigate(url);
    }
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSetSignUp = () => {
    setIsLoginView(false);
  };

  const handleSetLogIn = () => {
    setIsLoginView(true);
  };

  const accountScreen = (
    <AccountMenu 
      anchorEl={anchorElUser}
      open={Boolean(anchorElUser)}
      onClose={() => handleCloseUserMenu(null)}
      username={username}
      onLogOut={logOut}
    />
  );

  const logInScreen = (
    <LogInMenu 
      anchorEl={anchorElUser}
      open={Boolean(anchorElUser)}
      onClose={() => handleCloseUserMenu(null)}
      onSignUp={handleSetSignUp}
      onLogin={login}
    />
  );

  const signUpScreen = (
    <SignUpMenu 
      anchorEl={anchorElUser}
      open={Boolean(anchorElUser)}
      onClose={() => handleCloseUserMenu(null)}
      onSignUp={signUp}
      onLogin={handleSetLogIn}
    />
  );

  const userMenu = (username ? accountScreen : (isLoginView ? logInScreen : signUpScreen));

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Dancing Script, sans-serif',
              color: 'text.main',
              textDecoration: 'none',
            }}
          >
            Adell's Chocolates
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
              onClose={() => handleCloseNavMenu(null)}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={() => handleCloseNavMenu(page.url)}>
                  <Typography textAlign="center" sx={{color:"text.main"}}>{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Dancing Script, sans-serif',
              fontWeight: 700,
              color:"text.main",
              textDecoration: 'none',
            }}
          >
            Adell's Chocolates
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={() => handleCloseNavMenu(page.url)}
                sx={{ my: 2, color: 'black', display: 'block', color:"text.main"}}
              >
                {page.title}
              </Button>
            ))}
          </Box>
          <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenUserMenu}
              color="inherit"
            >
              <AccountCircleIcon />
            </IconButton>
            {userMenu}
        </Toolbar>
      </Container>
    </AppBar>
  );
}