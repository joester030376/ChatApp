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
        <Tooltip title={item.title} placement="right">
            <Stack direction={"column"} >
                <IconButton key={item.index}
                    sx={{
                        width: "max-content",
                        color: "#000",
                        borderRadius: "10px"
                    }}   
                    onClick={() => {
                        navigate(item.route);
                    }}        
                >                   
                    {item.icon}
                </IconButton>                                                                                  
            </Stack>
        </Tooltip>
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
        
            <Stack direction={"column"} 
                aria-owns={open ? 'mouse-over-popover' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpen}
                        onMouseLeave={handlePopoverClose}
            >
                <Tooltip title={item.title} placement='right'>
                    <IconButton
                        
                        sx={{
                            width: "max-content",
                            color: "#000",
                            borderRadius: "10px"
                        }}   
                    >
                        {item.icon}
                    </IconButton>
                </Tooltip>
            
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
            <Paper elevation={1} onMouseLeave={handlePopoverClose}
                sx={{ ml: "10px"}}
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
                          <ListItemIcon>
                            {child.icon}
                          </ListItemIcon>
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
