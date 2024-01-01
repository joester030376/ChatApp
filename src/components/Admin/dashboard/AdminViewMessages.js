import * as React from 'react';
import { Box, Stack, Typography, Avatar, Button, IconButton, Grid, Item, Divider} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { faker } from '@faker-js/faker';
import StyledBadge from '../../StyledBadge';
import { Phone, ChatsCircle } from '@phosphor-icons/react';

const AdminViewMessages = () => {

    const theme = useTheme();

    return (
        <>
            <Grid 
                container 
                rowSpacing={1} 
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                <Grid item xs={3}>
                    <Typography variant="overline">test</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="overline">Live Calls</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="overline">IM Tasks</Typography>
                 </Grid>                        
            </Grid>
            <Divider />
            <Grid 
                container 
                rowSpacing={1} 
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                <Grid item xs={3}>
                    <Stack
                        direction={"row"}  
                        spacing={2}
                        p={2} 
                        m={1}                    
                    >
                        <Stack>
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}  
                                variant={"dot"}                          
                            >
                                <Avatar src={faker.image.avatar()}    />   
                            </StyledBadge>      
                        </Stack>  
                        <Stack
                            spacing={0.3}
                            direction={"column"}
                        >
                            <Typography variant='subtitle2'>
                                {faker.name.fullName()}
                            </Typography>
                            <Typography variant='caption'>
                                Online | 6hr
                            </Typography>    
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={3}>
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
                </Grid>
                <Grid item xs={6}>
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
                 </Grid>
                 <Divider />     
            </Grid>

             


            
                    
                
        </>
    );
}

export default AdminViewMessages;