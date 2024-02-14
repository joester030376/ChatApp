import React from 'react';
import {Box, Divider, IconButton, Stack, Typography, Grid, Paper, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { faker } from '@faker-js/faker';
import AntSwitch from '../../../components/AntSwitch';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),  
  boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)",
  color: theme.palette.text.secondary,
}));

const CreateAgent = () => {
    
    
    return(
        <Box
            width={"100%"}
        >
            <Stack
                width={"100%"}
                direction={"column"}
            >
               <Stack
                direction={"column"}
                p={2}
               >
                <Box 
                    sx={{ fontWeight: 'bold' }}
                    mb={3}
                >
                    <Typography variant="h3">Create a new user</Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid 
                            item 
                            xs={12} 
                            md={4}                                                                          
                        >
                            <Item>
                                <Stack
                                    direction={"column"}
                                    pt={3}
                                >
                                    <Stack
                                        alignItems={"center"}
                                    >
                                        <Box
                                            p={0.5}
                                            border={"1px dashed"}
                                            borderRadius={"50%"}                                            
                                        >
                                            <Avatar src={faker.image.avatar()} sx={{ height: "125px", width: "125px"}} />
                                        </Box>
                                    </Stack> 
                                    <Stack
                                        width={"200px"}
                                        alignItems={"center"}
                                        m={'auto'}
                                        p={3}
                                        sx={{
                                            textAlign: "center"
                                        }}
                                    >
                                        <Typography variant='caption'>Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3 Mb</Typography>
                                    </Stack>
                                    <Stack                                        
                                        p={0.5}   
                                        alignItems={"left"}
                                        direction={"column"}
                                    >
                                        <Stack
                                            direction={"row"}
                                            justifyContent={"space-between"}
                                        >
                                            <Typography sx={{
                                                            fontWeight: 700
                                                        }}
                                            > 
                                                Email Verified
                                            </Typography>
                                            <AntSwitch />                                            
                                        </Stack>                                        
                                        <Typography sx={{ fontSize: "12px"}}>Disabling this will automatically send the user a verification email</Typography>
                                     </Stack>                                    
                                </Stack>
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Item>xs=6 md=4</Item>
                        </Grid>                       
                    </Grid>
                </Box>
               </Stack>
            </Stack>
        </Box>
    );
};

export default CreateAgent;