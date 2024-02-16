import React, { useState } from 'react';
import { styled, useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MailIcon from '@mui/icons-material/Mail';
import SidebarNavItems from './SidebarNavItems';
import { Sun, Gear, ArrowsOut, TextIndent, TextOutdent, Moon } from 'phosphor-react';
import { Badge, InputBase, Menu, MenuItem, Avatar, Tooltip, Stack, Container, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { faker } from '@faker-js/faker';
import useSettings from "../../hooks/useSettings";
import { ToggleSideNavBar } from '../../redux/slices/app';
import { useDispatch } from 'react-redux';
import MainAppBarAvatar from '../CrmUIComponents/MainAppBarAvatar';
import { Search, SearchIconWrapper, StyledInputBase } from '../Search';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const drawerWidth = 300;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden', 
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

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
  }),
);

const MainCRMNavigation = ({outlet}) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const {onToggleMode} = useSettings();
  const dispatch = useDispatch();
  const {sidenav} = useSelector((store) => store.app); 

  const handleDrawerOpen = () => {
    console.log("open")
    setOpen(true);
    dispatch(ToggleSideNavBar());
  };

  const handleDrawerClose = () => {
    setOpen(false);
    dispatch(ToggleSideNavBar());
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ display: 'flex', backgroundColor: theme.palette.mode === 'light' ? "rgb(250, 250, 250)" :  "#000" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} 
            sx={{
                backgroundColor: theme.palette.mode === 'light' ? "#fff" : "rgb(30, 30, 30)"
            }}
        >
      <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={ !open ? handleDrawerOpen : handleDrawerClose }
            aria-label="open drawer"
            sx={{ mr: 2,}}
          >
            { !open ? <TextIndent size={32} color={ theme.palette.mode === 'light' ? "#000" : null}/> : <TextOutdent size={32} color={ theme.palette.mode === 'light' ? "#000" : null} /> }
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            mr={4}
            sx={{ 
                display: { xs: 'none', sm: 'block' },
                color: theme.palette.mode === 'light' ? "#000" : null
            }}
          >
            Text 2 Them
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}              
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Tooltip title={ theme.palette.mode === 'light' ? "Dark Mode" : "Light Mode"}>
                <IconButton 
                    size="large" 
                    color="inherit" 
                    sx={{
                        '&:hover': {
                            background: "none"
                        }
                    }}
                    onClick={() => {
                     onToggleMode();
                    }}
                >              
                    { theme.palette.mode === "light" ? <Moon size={24} color={ theme.palette.mode === 'light' ? "#000" : null} /> : <Sun size={24} />    }      
                </IconButton>
            </Tooltip>
            <Tooltip title="Full Screen">
                <IconButton 
                    size="large" 
                    color="inherit" 
                    sx={{
                        '&:hover': {
                            background: "none"
                        }
                    }}
                >                            
                    <ArrowsOut size={24} color={ theme.palette.mode === 'light' ? "#000" : null} />         
                </IconButton>
            </Tooltip> 
            <Tooltip title="Settings">
                <IconButton 
                    size="large" 
                    color="inherit" 
                    sx={{
                        '&:hover': {
                            background: "none"
                        }
                    }}
                    onClick={() => {
                      navigate("/settings")
                    }}
                >                            
                    <Gear size={24} color={ theme.palette.mode === 'light' ? "#000" : null}/>         
                </IconButton>
            </Tooltip> 
            <IconButton size="large" aria-label="show 4 new mails" color="inherit" sx={{
                        '&:hover': {
                            background: "none"
                        }
                    }}>
              <Badge badgeContent={4} color="error">
                <MailIcon sx={{color: theme.palette.mode === 'light' ? "#000" : null}} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              sx={{
                '&:hover': {
                    background: "none"
                }
            }}
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon sx={{color: theme.palette.mode === 'light' ? "#000" : null}}/>
              </Badge>
            </IconButton>
            <MainAppBarAvatar />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon sx={{color: theme.palette.mode === 'light' ? "#000" : null}} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}    
      <Drawer variant="permanent" open={open} PaperProps={{ sx: {backgroundColor: theme.palette.mode === 'light' ? "#fff" : "rgb(30, 30, 30)"}}}>
        <DrawerHeader>
            <Box
                width={"100%"}
                p={1}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                >
                    <img src={faker.image.business()} height={"40px"} width={"40px"}/>
                    <Typography variant='h4'>
                        Text 2 Them
                    </Typography>
                </Stack>
            </Box>
        </DrawerHeader>
        <Divider />        
        <List>
          <SidebarNavItems />
        </List>
      </Drawer>
      <Box 
       >
        <DrawerHeader />
        <Container maxWidth="xl">
            <Box 
                mt={"60px"} 
                sx={{ bgcolor: '#fff', 
                      height: '75vh', 
                      boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)", 
                      width: sidenav.open ? "calc(100vw - 400px)" : "calc(100vw - 180px)", 
                      mt: "60px",
                      ml: "16px",
                      mr: "16px"
                }}>
              {outlet}
            </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default MainCRMNavigation;