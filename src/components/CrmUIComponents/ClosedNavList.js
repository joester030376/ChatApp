import React, {useState} from 'react';
import { Nav_Buttons } from '../../data/navmenudata';
import { hasChildren } from "../../utils/hasChildren";
import { useNavigate } from 'react-router-dom';
import { Tooltip, Stack, IconButton, Button, Menu, MenuItem, Popover } from '@mui/material';

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

    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);  

  return (
    <>
        <Tooltip title={item.title} placement='right'>
            <Stack direction={"column"} >
                <IconButton
                    aria-owns={open ? `${item.menu_name}` : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpen}                                       
                    sx={{
                        width: "max-content",
                        color: "#000",
                        borderRadius: "10px"
                    }}   
                >
                    {item.icon}
                </IconButton>
                <Popover
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                    id={item.menu_name}
                    sx={{
                      pointerEvents: 'none',
                    }}
                    open={open}
                    anchorEl={anchorEl}                    
                    onClose={handlePopoverClose}
                    disableRestoreFocus  
                >
                    <Menu
                        disableScrollLock={true}
                        MenuListProps={{
                            onMouseLeave: handlePopoverClose
                        }}
                        anchorOrigin={{
                            vertical: 'center',
                            horizontal: 'right',
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                          }}
                        aria-labelledby="demo-positioned-button"
                        anchorEl={anchorEl}
                        open={open}                                           
                    >
                        {children.map((child, key) => (  
                            <MenuItem
                                key={child.index}
                                onClick={() => {
                                    navigate(child.route);
                                }}                                      
                            >
                                {child.icon}
                                {child.title}  
                            </MenuItem>
                        ))}
                    </Menu>
                </Popover>
                                                                                
            </Stack>
        </Tooltip>    
    </>
  );
};


const ClosedNavList = () => {
    return Nav_Buttons.map((item, key) => <NavItem key={key} item={item} />);
};

export default ClosedNavList;