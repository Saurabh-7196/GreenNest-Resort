import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../assets/Logo.jpg';
import Footer from '../components/Footer';

const drawerWidth = 240;

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Booking', path: '/booking' },
  { label: 'Contact', path: '/contact' },
];

function MainLayout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  // Mobile Drawer content
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        backdropFilter: 'blur(8px)',
        bgcolor: 'rgba(255,255,255,0.9)',
        height: '100%',
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="center" sx={{ py: 2 }}>
        <Box
          component="img"
          src={Logo}
          alt="GreenNest Resorts Logo"
          sx={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            mr: 1,
            objectFit: 'cover',
          }}
        />
        <Typography
          variant="h6"
          sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}
        >
          GreenNest
        </Typography>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              selected={location.pathname === item.path}
              sx={{
                textAlign: 'center',
                color: 'text.primary',
                '&.Mui-selected': { color: theme.palette.primary.main },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        {/* Book Now button in mobile drawer */}
        <ListItem disablePadding sx={{ mt: 2 }}>
          <ListItemButton
            component={Link}
            to="/booking"
            sx={{
              textAlign: 'center',
              color: '#fff',
              bgcolor: theme.palette.primary.main,
              borderRadius: '50px',
              mx: 2,
              '&:hover': {
                bgcolor: theme.palette.primary.dark,
              },
            }}
          >
            <ListItemText primary="Book Now" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: 'rgba(224, 242, 233, 0.6)',
      }}
    >
      <CssBaseline />

      {/* Navbar */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          top: isMobile ? 8 : 16,
          left: 0,
          right: 0,
          bgcolor: 'transparent',
          boxShadow: 'none',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Toolbar
          sx={{
            width: isMobile ? '95%' : { sm: '80%', md: '70%' },
            mx: 'auto',
            bgcolor: 'rgba(255,255,255,0.8)',
            backdropFilter: 'blur(12px)',
            borderRadius: '50px',
            justifyContent: 'space-between',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            py: isMobile ? 0.5 : 1,
            px: isMobile ? 1.5 : 3,
          }}
        >
          {/* Logo + Title */}
          <Box display="flex" alignItems="center" gap={1}>
            <Box
              component="img"
              src={Logo}
              alt="GreenNest Resorts Logo"
              sx={{
                width: isMobile ? 28 : 36,
                height: isMobile ? 28 : 36,
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
            <Typography
              variant={isMobile ? 'subtitle1' : 'h6'}
              component={Link}
              to="/"
              sx={{
                textDecoration: 'none',
                color: theme.palette.primary.main,
                fontWeight: 'bold',
              }}
            >
              GreenNest
            </Typography>
          </Box>

          {/* Desktop Menu */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: 'text.primary',
                    textTransform: 'none',
                    fontWeight:
                      location.pathname === item.path ? 'bold' : 'normal',
                    px: 2,
                    borderRadius: '20px',
                    '&:hover': {
                      backgroundColor: 'rgba(0,0,0,0.04)',
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                component={Link}
                to="/booking"
                variant="contained"
                sx={{
                  borderRadius: '50px',
                  px: 3,
                  py: 1,
                  ml: 1,
                  fontWeight: 'bold',
                  backgroundColor: theme.palette.primary.main,
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                  },
                }}
              >
                Book Now
              </Button>
            </Box>
          )}

          {/* Mobile Menu Icon */}
          {isMobile && (
            <IconButton
              color="inherit"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ color: 'text.primary' }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            borderRadius: '0 20px 20px 0',
            backgroundColor: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(8px)',
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Page Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: 'rgba(224, 242, 233, 0.1)',
          p: 3,
          mt: { xs: 10, sm: 12 },
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

MainLayout.propTypes = {
  window: PropTypes.func,
};

export default MainLayout;
