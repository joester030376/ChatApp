import React, { useState } from 'react';
import { Nav_Buttons } from '../../data/navmenudata';
import { hasChildren } from "../../utils/hasChildren";
import { useNavigate } from 'react-router-dom';
import { ListItemText, ListItemIcon, MenuList, Typography, Collapse, Box, Tooltip, Stack, IconButton, Button, Menu, MenuItem, Popover, Popper, Fade, Paper } from '@mui/material';

const NavItem = ({ item }) => {
    const Component = hasChildren(item) ? MultiLevel : SingleLevel;
    return <Component item={item} />;
};

const SingleLevel = ({ item }) => {

    const navigate = useNavigate();

    return (
      <Stack p={0.1}>
        <Stack 
            direction={"column"} 
            alignItems={"center"} 
            p={0.2}
            sx={{
                borderRadius: '5px',
                    '&:hover' : {
                        backgroundColor: 'rgba(161, 161, 161, 0.25)'
                    }
                }}
        >
          <IconButton
            key={item.index}
            sx={{
              p: 0,
              width: "max-content",
              color: "#000",
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
            onClick={() => {
              navigate(item.route);
            }}
          >
            {item.icon}
          </IconButton>
          <Typography variant="caption">{item.title}</Typography>
        </Stack>
      </Stack>
    );
};

const MultiLevel = ({ item }) => {

    const navigate = useNavigate();
    const { items: children } = item;
    //const [open, setOpen] = useState(false);
    
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
      <>
        <Stack
          p={0.1}
          aria-owns={open ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
          sx={{
            borderRadius: '5px',
                '&:hover' : {
                    backgroundColor: 'rgba(161, 161, 161, 0.25)'
                }
            }}
        >
            <Stack 
                direction={"column"} 
                alignItems={"center"}
                p={0.2}                
            >
            <IconButton
              sx={{
                p: 0.4,
                width: "max-content",
                color: "#000",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              {item.icon}
            </IconButton>
            <Typography variant="caption">{item.title}</Typography>
          </Stack>
          <Popper
            // Note: The following zIndex style is specifically for documentation purposes and may not be necessary in your application.
            sx={{
              zIndex: 1200,
            }}
            open={open}
            anchorEl={anchorEl}
            placement="right-start"
            transition
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper
                  elevation={3}
                  onMouseLeave={handlePopoverClose}
                  sx={{
                    ml: "10px",
                    borderRadius: 0,
                  }}
                >
                  <MenuList>
                    {children.map((child, key) => (
                      <MenuItem
                        key={child.index}
                        onClick={() => {
                          handlePopoverClose();
                          navigate(child.route);
                        }}
                      >
                        <ListItemIcon>{child.icon}</ListItemIcon>
                        <ListItemText>{child.title}</ListItemText>
                      </MenuItem>
                    ))}
                  </MenuList>
                </Paper>
              </Fade>
            )}
          </Popper>
        </Stack>
      </>
    );
};


const ClosedNavList = () => {
    return Nav_Buttons.map((item, key) => <NavItem key={key} item={item} />);
};

export default ClosedNavList;
