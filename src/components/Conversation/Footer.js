import { Box, Stack, IconButton, TextField, InputAdornment} from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';
import { PaperPlaneTilt, Link, Smiley} from "@phosphor-icons/react";

import React from 'react'

const Footer = () => {

    const theme = useTheme();

  return (
    <Box
            p={3}            
            sx={{
                height: 100,
                width: "100%",
                backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
                boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)"
            }}
        >
            <Stack
                direction={"row"}
                alignItems={"center"}
                spacing={3}
            >
                <TextField  
                    sx={{                      
                        backgroundColor: theme.palette.mode === "light" ? "#fff" : theme.palette.background.default,                        
                    }}
                    fullWidth
                    placeholder="Write a message..."
                    InputProps={{
                        startAdornment: 
                            <InputAdornment position="start">
                                <IconButton>
                                    <Link size={24} />
                                </IconButton>
                            </InputAdornment>,
                        endAdornment: 
                            <InputAdornment position="start">
                                <IconButton>
                                    <Smiley size={24} />
                                </IconButton>
                            </InputAdornment>,
                    }}
                />
                 <IconButton
                 sx={{
                    borderRadius: "5px",
                    backgroundColor: theme.palette.primary.main,
                    color: "#fff"
                 }}                   
                 >
                    <PaperPlaneTilt size={24} />
                 </IconButton>
            </Stack>
        </Box>      
  )
}

export default Footer;