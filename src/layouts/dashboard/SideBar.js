import { useState } from 'react';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Box, Stack, IconButton, Divider, Avatar, Switch, Menu, MenuItem} from "@mui/material";
import appimages from "../../assets/Images/AppImages";
import { Nav_Buttons } from "../../data";
import { faker } from "@faker-js/faker";
import { useTheme, styled } from "@mui/material/styles";
import useSettings from "../../hooks/useSettings";
import { Profile_Menu } from '../../data';

const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 40,
    height: 20,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(20px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 16,
      height: 16,
      borderRadius: 8,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 20 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));
  

const SideBar = () => {

    const theme = useTheme();
    const [selected, setSelected] = useState(0);  
    const {onToggleMode} = useSettings();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

  return (
    <Box
        padding={2}
          sx={{
            backgroundColor: theme.palette.background.paper,
            boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
            height: "100vh",
            width: 100,
          }}
        >
            <Stack 
              direction={"column"}
              sx={{width: "100%", height: "100%"}} 
              justifyContent={"space-between"}
              alignItems={"center"} 
              spacing={3} 
            >
              <Stack alignItems={"center"} spacing={4}>
                <Box sx={{
                  backgroundColor: theme.palette.primary.main,
                  height: 64,
                  width: 64,
                  borderRadius: 1.5,
                }}>
                    <img src={appimages.images.logo} alt="chat app logo" />  
                </Box> 
                <Stack 
                  spacing={3} 
                  sx={{width: "max-content"}} 
                  direction="column" 
                  alignItems="center">
                  {Nav_Buttons.map((el) => (  
                    el.index === selected ?
                    <Box
                    key={el.index}
                      p={1}
                      sx={{
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: 1.5
                      }}
                    >
                      <IconButton key={el.index}
                        sx={{
                          width: "max-content",
                          color: "#fff"
                        }}
                      >
                        {el.icon}
                      </IconButton> 
                    </Box>          
                    : <IconButton 
                        onClick={() => {
                          setSelected(el.index)
                        }}
                        key={el.index}
                        sx={{
                          width: "max-content",
                          color: theme.palette.mode === 'light' ? "#000" : theme.palette.text.primary
                        }}
                      >
                        {el.icon}
                      </IconButton>               
                  ))}
                  <Divider flexItem />   
                  { selected === 3 ? 
                    <Box
                      p={1}
                      sx={{                     
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: 1.5
                      }}
                    >
                      <IconButton
                        sx={{
                          width: "max-content",
                          color: "#fff"
                        }}
                      >
                        <SettingsOutlinedIcon />
                      </IconButton>  
                  </Box>
                  :
                    <IconButton                  
                      onClick={() => {
                        setSelected(3);
                      }}  
                      sx={{
                        width: "max-content",
                        color: theme.palette.mode === 'light' ? "#000" : theme.palette.text.primary
                      }}                  
                    >
                      <SettingsOutlinedIcon />
                    </IconButton> 
                  }                           
                </Stack> 
              </Stack>  
              <Stack spacing={4}>
                <AntSwitch 
                  defaultChecked 
                  onChange={() => {
                    onToggleMode();
                  }}
                />
                <Avatar src={faker.image.avatar()} 
                  id="demo-positioned-button"
                  aria-controls={open ? 'demo-positioned-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                
                />
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}

                  >
                    {Profile_Menu.map((el) => (
                      <MenuItem onClick={handleClick}>
                        <Stack sx={{width: 100}} direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                            <span>{el.title}</span>
                            {el.icon}
                        </Stack>
                      </MenuItem>
                    ))}
                    
                </Menu>  
              </Stack>                   
            </Stack>       
        </Box>   
  )
}

export default SideBar;