import {Box, Stack, Avatar, Typography, IconButton} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ArrowDownLeft, ArrowUpRight, Phone } from '@phosphor-icons/react';
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
                    spacing={2}
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


  const CallElement = () => {

    return (
      <>
      </>  
    );
}

export { CallLogElement, CallElement };