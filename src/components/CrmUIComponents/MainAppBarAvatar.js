import React, { useState } from 'react';
import { Box, Avatar, MenuItem, IconButton, Typography, Tooltip, Stack, Menu, Divider } from '@mui/material';
import { LogoutUser } from '../../redux/slices/auth';
import { useDispatch } from 'react-redux';
import { faker } from "@faker-js/faker";
import { Profile_Menu } from '../../data';
import {useNavigate} from 'react-router-dom';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';



const MainAppBarAvatar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOnClick = (el) => {
      console.log(el);
      navigate(el);
  } 
  
  const getMenuPath = (index) => {
    switch(index) {
      case 0:
        console.log(index);
        return "/profile";

      case 1: 
        return "/settings";

      case 2:
        // TODO => Update token and set isAuth
        return "auth/login";

      default:
        break;
    }
  }

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>        
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}
                src={faker.image.avatar()} alt={faker.name.fullName()}
            />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            borderRadius: 0,            
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,              
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar src={faker.image.avatar()} alt={faker.name.fullName} /> {faker.name.fullName()}
        </MenuItem>
        <Divider />
            {Profile_Menu.map((el, index) => (
                <MenuItem 
                    onClick={() => {                      
                        handleClick();
                    }}>
                    <Stack 
                        onClick={() => {
                            if (index === 2) {
                               //if idx = 2 then signout
                              dispatch(LogoutUser());
                            } else {
                              navigate(getMenuPath(index));
                            }
                        }}
                        sx={{width: 300}} 
                        direction={"row"} 
                        alignItems={"center"} 
                        justifyContent={"space-between"}>
                            <span>{el.title}</span>
                                {el.icon}
                    </Stack>
                </MenuItem>
            ))}        
      </Menu>
    </>
  );
}

export default MainAppBarAvatar;