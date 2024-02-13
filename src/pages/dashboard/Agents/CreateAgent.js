import React from 'react';
import {Box, Divider, IconButton, Stack, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
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
                >
                    <Typography variant="h3">Create a new user</Typography>
                </Box>
                   <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                              <Item>xs=8</Item>
                            </Grid>
                            <Grid item xs={21} md={8}>
                              <Item>xs=8</Item>
                            </Grid>
                        </Grid>
                    </Box>
               </Stack>
            </Stack>
        </Box>
    );
};

export default CreateAgent;