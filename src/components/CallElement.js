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
                borderBottom: "1px solid rgba(145, 158, 171, 0.24)" 
            }}
            p={1.5}
        >     
            <Stack
               direction={"row"}
              
               alignItems={"center"}
               justifyContent={"space-between"} 
            >
                <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={1}
                >
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}  
                        variant={online ? "dot" : ""}                          
                    >
                        <Avatar src={img} alt={name}  />   
                    </StyledBadge> 
                    <Stack
                        direction={"column"}
                        alignItems={"center"}
                        spacing={0.3}
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
                </Stack>
                <Stack
                    alignItems={"center"}
                    direction={"row"}
                    spacing={2}
                >
                    <IconButton>
                        <Phone size={24} color="green"/>
                    </IconButton>   
                </Stack>

            </Stack>
        </Box>

    );
  };


  const CallElement = ({id, name, img}) => {

    const theme = useTheme();

    return (
        <Box 
            width={"100%"}                       
            p={1.5}
            sx={{
                borderBottom: "1px solid rgba(145, 158, 171, 0.24)"
            }}
        >     
        <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
        >
            <Stack
                direction={"row"}
                alignItems={"center"}
            >
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}  
                    variant={"dot"}                          
                >
                    <Avatar src={img} alt={name}  />   
                </StyledBadge>  
                
            
            
            </Stack>
            <Stack>
            </Stack>
            
            
        </Stack>
    </Box>  
    );
}

export { CallLogElement, CallElement };