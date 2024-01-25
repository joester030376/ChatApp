import React, {useState} from 'react';
import { Box, Stack, Divider, Typography, Avatar} from '@mui/material';
import { Bell, Lock, Key, Sliders, Image, ClipboardText, Keyboard, Info } from '@phosphor-icons/react';
import { useTheme } from '@mui/material/styles';
import { faker } from '@faker-js/faker';
import ThemeDialog from '../../../sections/settings/ThemeDialog';
import Shortcuts from '../../../sections/settings/Shortcuts';

const SettingsList = () => {
    
    const theme = useTheme();

    const [openShortCuts, setOpenShortCuts] = useState(false);
    const [openThemeDialog, setOpenThemeDialog] = useState(false);

    const handleOpenShortcuts = () => {
        setOpenShortCuts(true);
    }

    const handleCloseShortcuts = () => {
        setOpenShortCuts(false);
    }

    const handleOpenThemeDialog = () => {
        setOpenThemeDialog(true);
    }

    const handleCloseThemeDialog = () => {
        setOpenThemeDialog(false);
    }    

    const SettingsMenu = [

        {
          title: "Notifications",
          icon: <Bell size={24} />,    
          divider: true,
          onclick: null,
          route: "/notifications"
        },
        {
          title: "Privacy",
          icon: <Lock size={24} />,
          divider: true,
          onclick: () => {},
        },
        {
          title: "Security",
          icon: <Key size={24} />,
          divider: true,
          onclick: () => {},
        },
        {
          title: "Theme",
          icon: <Sliders size={24} />,
          divider: true,
          onclick: handleOpenThemeDialog,
        },
        {
          title: "Chat Wallpaper",
          icon: <Image size={24} />,
          divider: true,
          onclick: () => {},
        },
        {
          title: "Request Account Info",
          icon: <ClipboardText size={24} />,
          divider: true,
          onclick: () => {},
        },
        {
          title: "Keyboard Shortcuts",
          icon: <Keyboard size={24} />,
          divider: true,
          onclick: handleOpenShortcuts,   
        },
        {
          title: "Help",
          icon: <Info size={24} />,
          divider: false,
          onclick: () => {},
        }
      ];

  return (
    <>
    <Box 
        sx={{
            position: "relative", 
            height: "100%",              
            width: 400,
            backgroundColor: theme.palette.mode === "light" ? "#fff" : "rgb(30, 30, 30)",
            boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)"
        }}
    >
        <Stack p={3} spacing={2}  sx={{height: "100%"}} >
            <Stack 
                direction={"column"}
                width={"100%"}  
                spacing={2}                  
            >
                <Stack 
                     direction={"column"}
                >
                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={3}
                        p={1}
                    >                        
                        <Typography variant='h5'>
                            Settings
                        </Typography>
                    </Stack>  
                    <Divider />
                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={3}
                        p={3}
                    >
                        <Avatar 
                            src={faker.image.avatar()} 
                            alt={faker.name.fullName()} 
                            sx={{
                                height: 75,
                                width: 75
                            }}                    
                        />
                        <Stack
                            spacing={0.2}
                            direction={"column"}
                        >
                            <Typography variant='subtitle2'>
                                {faker.name.fullName()}
                            </Typography>
                            <Typography variant='caption'>
                                Exploring
                            </Typography>    
                        </Stack> 
                    </Stack>
                </Stack>         
            </Stack>
            <Stack
                direction={"column"}
                width={"100%"} 
                height={"100%"} 
                spacing={2}  
                sx={{
                    overflowX: "hidden",
                    scrollbarWidth: "thin",
                    scrollbarColor: theme.palette.primary.dark,
                }}  
            >
                <Stack spacing={4} p={3}>        
                {
                    SettingsMenu.map((el) => <>
                        {console.log(el.route)}
                        <Stack 
                            spacing={2} 
                            onClick={el.onclick}
                            sx={{cursor: "pointer"}}
                        >
                            <Stack direction={"row"} spacing={2} alignItems={"center"}>
                                {el.icon}
                                <Typography variant='body2'>{el.title}</Typography>
                            </Stack>
                        </Stack>
                        {el.divider && <Divider variant='middle'/>}
                    </>)}
                </Stack>  
            </Stack>
        </Stack>        
    </Box>
    { openShortCuts && <Shortcuts open={openShortCuts} handleClose={handleCloseShortcuts} />}
        { openThemeDialog && <ThemeDialog open={openThemeDialog} handleClose={handleCloseThemeDialog} /> }
</>

  )
}

export default SettingsList;