import { Box, Stack, IconButton, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { faker } from '@faker-js/faker';
import { ChatsCircle } from '@phosphor-icons/react';

const ChatMessagePuck = () => {

    const theme = useTheme();

  return (
    <>
        <Stack
            direction={"row"}
            alignItems={"center"}    
        >
            <Stack 
                direction={"row"}  
                spacing={2}
                m={2}
                width={"250px"}
                sx={{
                    border: "1px solid lightGray"
                }}     
        >
            <Box
                alignItems={"center"}
                height={49}
                width={49} 
                sx={{
                    backgroundColor: "#a2cf6e",
                    paddingLeft: "0.5px"
                }}
            >
                <IconButton
                    alignItems="center"
                >
                    <ChatsCircle size={32} color="#FFFFFF" />
                </IconButton>
            </Box>
                <Stack 
                    direction={"column"}
                    p={0.5}
                >
                    <Typography variant='subtitle2'>
                        {faker.name.fullName()}
                    </Typography>
                    <Typography variant='caption'>
                        2m
                    </Typography> 
                </Stack>                            
            </Stack>
        </Stack>                   
    </>
  )
}

export default ChatMessagePuck;