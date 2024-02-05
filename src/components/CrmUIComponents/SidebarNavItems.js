import { LogoutUser } from '../../redux/slices/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { ListItem, ListItemButton, ListItemText, ListItemIcon, Tooltip, Box, IconButton, Stack, Typography, Menu, MenuItem } from "@mui/material";
import { Nav_Buttons } from "../../data";
import { useTheme  } from "@mui/material/styles";
import useSettings from "../../hooks/useSettings";
import {useNavigate} from 'react-router-dom';

  
const SidebarNavItems = () => {
    
    const {open} = useSelector((state) => state.app.sidenav);

    const theme = useTheme();
    const [selected, setSelected] = useState(0); 
    const navigate = useNavigate(); 
    
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);

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
            <Stack
                spacing={2}                  
                direction="column"
                alignItems={ !open ? "center" : null}  
            >
                {Nav_Buttons.map((el) => (                      
                    el.index === selected ?                    
                    <Box
                        key={el.index}                    
                        p={0.5}
                        sx={{
                            backgroundColor: "rgb(219, 219, 219)",    
                            color: "#000"                        
                        }}
                    >
                      <Tooltip title={ open ? "" : el.title}>
                        <Stack direction={"row"} alignItems={"center"} >
                            <IconButton key={el.index}
                                sx={{
                                width: "max-content",
                                color: "#000"    
                                }}
                            >
                                {el.icon}
                                
                            </IconButton>
                                {
                                    open ? <Typography sx={{ cursor: "pointer"}}> {el.title} </Typography> : null 
                                }                                  
                        </Stack>
                      </Tooltip>                                                           
                    </Box>  
                    : <Tooltip title={ open ? "" : el.title}>
                    <Stack direction={"row"} alignItems={"center"} spacing={1} sx={{cursor: "pointer"}}  onClick={() => {
                        setSelected(el.index);
                        navigate(el.route);
                    }}>
                        <IconButton 
                            id="demo-positioned-button"
                            aria-controls={openMenu ? 'demo-positioned-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openMenu ? 'true' : undefined}
                            onClick={(event) => {
                                setSelected(el.index);
                                navigate(el.route);
                                handleClick(event);
                            }}
                                key={el.index}
                                sx={{
                                width: "max-content",
                                color: theme.palette.mode === 'light' ? "#000" : theme.palette.text.primary
                            }}
                        >
                            {el.icon}
                        </IconButton>
                        {
                            open ? <Typography sx={{ cursor: "pointer"}}> {el.title} </Typography> : null 
                        }                                                  
                    </Stack>
                        </Tooltip>
                  ))} 
            </Stack>
        </>
  )
}

export default SidebarNavItems;



                 