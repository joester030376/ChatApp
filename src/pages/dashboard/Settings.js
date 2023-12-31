import {Avatar, Box, IconButton, Stack, Typography, Divider, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { CaretLeft, Bell, Lock, Key, Sliders, Image, ClipboardText, Keyboard, Info } from '@phosphor-icons/react';
import { faker } from '@faker-js/faker';
import Shortcuts from '../../sections/settings/Shortcuts';
import { useState } from 'react';
import ThemeDialog from '../../sections/settings/ThemeDialog';

const Settings = () => {    

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
        <Stack
            direction={"row"}
            width={"100%"}
        >
            {/* Left Panel */}
            <Box
                sx={{
                    //overflowY: "scroll",
                    height: "100vh",
                    width: 320,
                    backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
                    boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)"
                }}
            >
                <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={3}
                    p={3}
                >
                    <IconButton>
                        <CaretLeft size={32} />
                    </IconButton>
                    <Typography variant='h5'>
                       Settings
                    </Typography>
                </Stack>
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
            </Box>
            {/* Right Panel */}
            <Box
                sx={{
                    height: "100%",
                    width: "calc(100vw - 420px)",
                    backgroundColor: theme.palette.mode === "light" ? "#F0F4FA" : theme.palette.background.paper,
                }}
            >                

            </Box>
        </Stack>
        { openShortCuts && <Shortcuts open={openShortCuts} handleClose={handleCloseShortcuts} />}
        { openThemeDialog && <ThemeDialog open={openThemeDialog} handleClose={handleCloseThemeDialog} /> }
     </>
  )
}

export default Settings;