import {Box, Stack, Avatar, Typography, IconButton} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ArrowDownLeft, ArrowUpRight, Phone, Video, VideoCamera } from '@phosphor-icons/react';
import { faker } from '@faker-js/faker';
import StyledBadge from './StyledBadge';

  const CallLogElement = ({id,  img, name, online, incoming, missed}) => {

    const theme = useTheme();

    return (

        <Box 
            sx={{
                width: "100%",
                borderRadius: 1,
                backgroundColor: theme.palette.mode === "light" ? "#fff" : theme.palette.background.paper,                
            }}
            p={2}
        >     
            <Stack
                direction={"row"}
                spacing={2}
                alignItems={"center"}
                justifyContent={"space-between"}
            > 
                <Stack
                    direction={"row"}
                    spacing={1}
                    alignItems={"center"}
                    justifyContent={"space-between"}                        
                >
                    <Stack>
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}  
                            variant={online ? "dot" : ""}                          
                        >
                            <Avatar src={img} alt={name}  />   
                        </StyledBadge>      
                    </Stack>  
                    <Stack
                        spacing={0.3}
                        direction={"column"}
                    >
                        <Typography variant='subtitle2'>
                            {faker.name.fullName()}
                        </Typography>
                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            spacing={0.5}
                        >                                
                            {incoming ? <ArrowDownLeft size={24} color={missed ? "red" : "green"} /> : <ArrowUpRight size={24} color={missed ? "red" : "green"}/>}
                            <Typography
                                variant='caption'
                            >
                               Yesterday, 16:36
                            </Typography>
                        </Stack>                  
                    </Stack> 
                        <Stack
                            spacing={2}
                            alignItems={"center"}
                        >
                            <IconButton>
                                <Phone size={24} color="green"/>
                            </IconButton>                             
                        </Stack>
                </Stack>
            </Stack>
        </Box>

    );
  };


  const CallElement = ({id, name, img}) => {

    const theme = useTheme();

    return (
        <Box 
        mt={3}
        sx={{            
            width: "100%",
            borderRadius: 1,
            backgroundColor: theme.palette.mode === "light" ? "#fff" : theme.palette.background.paper, 
            boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)"         
        }}
        p={2}
    >     
        <Stack
            direction={"row"}
            spacing={2}
            alignItems={"center"}
            justifyContent={"space-between"}
        > 
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
                        variant={"dot"}                          
                    >
                        <Avatar src={img} alt={name}  />   
                    </StyledBadge>      
                </Stack>  
                <Stack
                    spacing={0.3}
                    direction={"column"}
                >
                    <Typography variant='subtitle2'>
                        {name}
                    </Typography>
                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={0.5}
                    >                                
                        
                        <Typography
                            variant='caption'
                        >
                           Yesterday, 16:36
                        </Typography>
                    </Stack>                  
                </Stack> 
                    <Stack
                        
                        alignItems={"center"}
                        direction={"row"}                        
                    >
                        <IconButton>
                            <Phone size={24} color="green"/>
                        </IconButton>   
                        <IconButton>
                            <VideoCamera size={24} color="green"/>
                        </IconButton>                                
                    </Stack>
            </Stack>
        </Stack>
    </Box>  
    );
}

export { CallLogElement, CallElement };