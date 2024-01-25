import {Avatar, Box, IconButton, Stack, Typography, Divider, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { CaretLeft, Bell, Lock, Key, Sliders, Image, ClipboardText, Keyboard, Info } from '@phosphor-icons/react';
import { faker } from '@faker-js/faker';
import Shortcuts from '../../../sections/settings/Shortcuts';
import { useState } from 'react';
import ThemeDialog from '../../../sections/settings/ThemeDialog';
import SettingsList from './SettingsList';

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
    <Box
        width={"100%"}
        height={"100%"}       
      >
        <Stack
            direction={"row"}
            height={"inherit"}
        >
            <Stack
              direction={"row"}
              height={"100%"}
              sx={{
                width: "320px",
                border: "1px solid black"       
              }}
            >

             <SettingsList />  

            </Stack>  
            <Stack
              width={"100%"}
            >
                <Box
                    sx={{
                      height: "calc(100vh - 100px)",
                      width: "100%",                      
                      backgroundColor: theme.palette.mode === "light" ? "#F0F4FA" : theme.palette.background.paper,
                    }}
                >

                  {/* Settings Form */}

                </Box>              
            </Stack>
          </Stack>
      </Box>
  )
}

export default Settings;