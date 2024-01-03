import { Box, Stack, IconButton, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { faker } from '@faker-js/faker';
import { Phone } from '@phosphor-icons/react';
const LiveCallPuck = () => {

    const theme = useTheme();

  return (
    <>
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
                    backgroundColor: theme.palette.primary.main,
                    paddingLeft: "0.5px"
                }}
            >
                <IconButton
                    alignItems="center"
                >
                    <Phone size={32} color='#FFFFFF'/>
                </IconButton>
            </Box>
                <Stack 
                    direction={"column"}
                    p={0.5}
                >
                    <Typography variant='subtitle2'>
                        {faker.phone.number()}
                    </Typography>
                    <Typography variant='caption'>
                         2m
                    </Typography> 
                </Stack>
        </Stack>
    </>
  )
}

export default LiveCallPuck;