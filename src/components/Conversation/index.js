import { Box, Stack, Badge, Avatar, Typography, IconButton, Divider, TextField, InputAdornment} from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';
import { faker } from "@faker-js/faker";
import { VideoCamera, Phone, MagnifyingGlass, CaretDown, PaperPlaneTilt, Link, Smiley} from "@phosphor-icons/react";

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

  

const Conversation = () => {

    const theme = useTheme();

  return (
    <Stack
        direction="column"
        height={"100%"}
        maxHeight={"100vh"}
        width={"auto"}
    >
        {/* Chat Header */}
        <Box
            p={2}
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
                justifyContent={"space-between"} 
                sx={{
                    width: "100%",
                    height: "100%"
                }}    
            >
                <Stack 
                    direction={"row"}
                    alignItems={"center"}
                    spacing={3}
                >
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar alt={faker.name.fullName()} src={faker.image.avatar()} />
                    </StyledBadge>
                        <Stack
                            spacing={0.2}
                            direction={"column"}
                        >
                            <Typography variant='subtitle2'>
                                {faker.name.fullName()}
                            </Typography>
                            <Typography variant='caption'>
                            Online
                            </Typography>    
                    </Stack>           
                </Stack>
                <Stack 
                    direction="row"
                    alignItems={"center"}
                    spacing={3}                    
                >
                    <IconButton
                        sx={{
                            color: theme.palette.mode === 'light' ? "#000" : theme.palette.text.primary
                        }}
                    >
                        <VideoCamera size={24} />
                    </IconButton>
                    <IconButton
                        sx={{
                            color: theme.palette.mode === 'light' ? "#000" : theme.palette.text.primary
                        }}
                    >
                        <Phone size={24} />
                    </IconButton>
                    <IconButton
                        sx={{
                            color: theme.palette.mode === 'light' ? "#000" : theme.palette.text.primary
                        }}
                    >
                        <MagnifyingGlass size={24} />
                    </IconButton>
                     <Divider 
                        orientation={"vertical"}
                        flexItem
                    />
                    <IconButton
                        sx={{
                            color: theme.palette.mode === 'light' ? "#000" : theme.palette.text.primary
                        }}
                    >
                        <CaretDown size={24} />
                    </IconButton> 
                </Stack>
            </Stack>
        </Box>

        {/* Msg */}
        <Box
            width={"100%"}
            sx={{
                flexGrow: 1,
                overflowY: "auto"                
            }}
        >

                

        </Box>
        
        {/* Chat Footer */}
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
                        disableUnderline: true,
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
    </Stack>
  )
}

export default Conversation;