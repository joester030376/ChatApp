import { Box, IconButton, Typography, Stack, InputBase, Divider, Button, Badge, Avatar } from '@mui/material';
import { CircleDashed, MagnifyingGlass, ArchiveBox } from 'phosphor-react';
import { styled, alpha } from '@mui/material/styles';
import React from 'react';
import { faker } from '@faker-js/faker';

const ChatElement = () => {
    return (
        <Box
            sx={{
                width: "100%",
                borderRadius: 1,
                backgroundColor: "#fff",                
            }}
            p={2}
        >     
            <Stack
                direction={"row"}
                spacing={2}
                alignItems={"center"}
                justifyContent={"space-between"}
            >
                <Stack>
                    <Stack
                        direction={"row"}
                        spacing={2}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                    >
                        <Stack>
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant="dot"
                            >
                                <Avatar src={faker.image.avatar()}    />   
                            </StyledBadge>      
                        </Stack>  
                        <Stack
                            spacing={0.3}
                            direction={"column"}
                        >
                            <Typography variant='subtitle2'>
                                Jaydog1976
                            </Typography>
                            <Typography variant='caption'>
                                You: thnx!
                            </Typography>    
                        </Stack>                  
                    </Stack>              
                </Stack>
                <Stack
                    spacing={2}
                    alignItems={"center"}
                >
                    <Typography
                        sx={{
                            fontWeight: 600
                        }}
                        variant='caption'
                    >
                        9:36
                    </Typography>
                    <Badge
                        color="primary" 
                        badgeContent={2}
                    />
                    
                </Stack>
            </Stack>
        </Box>
    )
}

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 20,
    backgroundColor: alpha(theme.palette.background.paper, 1),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%"
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
     
      width: '100%',      
    },
  }));

const Chats = () => {
  return (
    <Box 
        sx={{
            position: "relative", 
            height: "auto", 
            width: 320,
            backgroundColor: "#F8FAFF",
            boxShadow: "0 0 2px rgba(0, 0, 0, 0.25"
        }}
    >
        <Stack p={3} spacing={2}  >
            <Stack 
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
            >
                <Typography 
                    variant="h5"
                    letterSpacing={1}
                    
                >
                    Chats
                </Typography>
                <IconButton>
                    <CircleDashed size={32} />
                </IconButton>
            </Stack>
            <Stack
                sx={{
                    width: "100%"
                }}
            >
                <Search>
                    <SearchIconWrapper>
                        <MagnifyingGlass color="#709CE6" size={32}/>
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </Stack>
            <Stack spacing={1}>  
                <Stack
                    direction={"row"}
                    alignItems={"center"}    
                    spacing={1.5} 
                >
                    <ArchiveBox size={24} />               
                    <Button>Archive</Button>                   
                </Stack>
                <Divider />
            </Stack>
            <Stack
                direction={"column"}
            >
                <Stack 
                    spacing={2.4}
                >
                    <Typography 
                        variant='subtitle'
                        sx={{
                            color: "#676767"
                        }}
                    >
                        Pinned
                    </Typography>
                    <ChatElement />
                </Stack>                
            </Stack>
        </Stack>
    </Box>
  )
}

export default Chats