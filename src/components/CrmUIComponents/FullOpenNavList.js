import React, { useState } from "react";
import { List, ListItem, Collapse, ListItemText, ListItemButton, ListItemIcon, Stack, Link} from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useNavigate} from 'react-router-dom';
import { Nav_Buttons } from "../../data/navmenudata";
import { hasChildren } from "../../utils/hasChildren";


export default function App() {
  return Nav_Buttons.map((item, key) => <NavItem key={key} item={item} />);
}

const NavItem = ({ item }) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel; 
  return <Component item={item} />;
};

const SingleLevel = ({ item }) => {

    const navigate = useNavigate();    

    return (
        <ListItem 
            onClick={() => {
                navigate(item.route);
            }}
            key={item.index}
        >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
        </ListItem>
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
    <List component={Stack} direction="column">
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.title} />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ml: "20px"}}>
          {children.map((child, key) => (  
            <ListItemButton
                key={child.index}
                onClick={() => {
                    navigate(child.route);
                }}    
                sx={{
                    fontSize: "12px"
                }}        
            >
                <ListItemIcon>
                    {child.icon}
                </ListItemIcon>
                <ListItemText primary={child.title} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </List>
  );
};