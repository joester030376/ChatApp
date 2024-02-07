import React, { useState } from 'react';
import { Nav_Buttons } from '../../data/navmenudata';
import { hasChildren } from "../../utils/hasChildren";
import { useNavigate } from 'react-router-dom';
import { Collapse, Box, Tooltip, Stack, IconButton, Button, Menu, MenuItem, Popover } from '@mui/material';

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
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    return (
        <>
        
            <Stack direction={"column"} >
                <Tooltip title={item.title} placement='right'>
                    <IconButton
                        onClick={handleClick}
                        sx={{
                            width: "max-content",
                            color: "#000",
                            borderRadius: "10px"
                        }}   
                    >
                        {item.icon}
                    </IconButton>
                </Tooltip>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Stack> 
                    {children.map((child, key) => (  
                            <Tooltip title={child.title} placement='right'>
                                <IconButton
                                sx={{
                            
                            color: "#000",
                            borderRadius: "10px"
                        }}   
                                    key={child.index}
                                    onClick={() => {
                                        navigate(child.route);
                                    }}                                      
                                >
                                    {child.icon}
                            </IconButton>
                            </Tooltip>
                        ))}
                    </Stack> 
               </Collapse>
                
            </Stack>
        
    </>
    );
};


const ClosedNavList = () => {
    return Nav_Buttons.map((item, key) => <NavItem key={key} item={item} />);
};

export default ClosedNavList;
