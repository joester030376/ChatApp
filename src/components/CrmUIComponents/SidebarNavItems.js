import { LogoutUser } from '../../redux/slices/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { ListItem, ListItemButton, ListItemText, ListItemIcon, Tooltip, Box, IconButton, Stack, Typography, Menu, MenuItem, Button } from "@mui/material";
import { Nav_Buttons } from "../../data/navmenudata";
import { useTheme  } from "@mui/material/styles";
import useSettings from "../../hooks/useSettings";
import {useNavigate} from 'react-router-dom';
import { Circle } from 'phosphor-react';
import FullOpenNavList from './FullOpenNavList';
import ClosedNavList from './ClosedNavList';
  
const SidebarNavItems = () => {
    
    const {open} = useSelector((state) => state.app.sidenav);

    const theme = useTheme();
    const [selected, setSelected] = useState(0); 
    const navigate = useNavigate(); 
    
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);

    const handleOpen = (event) => {       
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
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
            <Stack
                             
                direction="column"
                alignItems={ !open ? "center" : null}  
            >
               <Box
                                          
                        p={0.5}
                        sx={{
                            //backgroundColor: "rgb(219, 219, 219)",    
                            color: "#000",                                    
                        }}
                    >
                        {
                            open ? <FullOpenNavList /> : <ClosedNavList />
                        }      
                                           
                    </Box>  
            </Stack>
        </>
  )
}

export default SidebarNavItems;



                 