import React from 'react';
import {Box, Divider, IconButton, Stack, Typography, Grid, Paper, Avatar, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { faker } from '@faker-js/faker';
import AntSwitch from '../../../components/AntSwitch';
import FormProvider from '../../../components/hook-form/FormProvider';
import RHFTextField from '../../../components/hook-form/RHFTextField';
import * as Yup from 'yup';
import {Form, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import { useTheme } from '@mui/material/styles';
import { useDispatch } from 'react-redux';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),  
  boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.20)",
  color: theme.palette.text.secondary,
}));

const CreateAgent = () => {
    
    const theme = useTheme();
    const dispatch = useDispatch();

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const CreateAgentSchema = Yup.object().shape({
        firstName: Yup.string().required("First name is required"), 
        lastName: Yup.string().required("Last name is required"),
        email: Yup.string().required("Email is required").email("Email must be valid email address."),
    });

    const defaultValues = {
        firstName: "",  
        lastName: "",    
        email: "", 
    };

    const methods = useForm({
        resolver: yupResolver(CreateAgentSchema),
        defaultValues,
    });

    const {
        reset, 
        setError, 
        handleSubmit, 
        formState: {errors, isSubmitting, isSubmitSuccessful},
    } = methods;

    const onSubmit = async (data) => {
        try {
            // submit data to backend
            console.log(data);
        }
        catch(error) {
            console.log(error);
            reset();
            setError("afterSubmit", {
                ...error, 
                message: error.messasge,
            })
        }
    };
    
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
                <FormProvider
                    methods={methods}
                    onSubmit={handleSubmit(onSubmit)}
                >
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
                            <Grid 
                                item xs={12} 
                                md={8}                                                   
                            >
                                <Item>
                                    <Box
                                        width={"100%"}                                             
                                    >
                                        <Stack
                                            direction={"row"}
                                            justifyContent={"space-evenly"}
                                            spacing={2}   
                                            m={3}  
                                        >
                                            <RHFTextField name={"firstName"} label="First Name" />
                                            <RHFTextField name={"lastName"} label="Last Name" />
                                        </Stack>
                                        <Stack
                                            direction={"row"}
                                            justifyContent={"space-evenly"}
                                            spacing={2}   
                                            m={3}  
                                        >
                                            <RHFTextField name={"fullName"} label="Full Name" />
                                            <RHFTextField name={"fullName"} label="Full Name" />
                                        </Stack>
                                        <Stack
                                            direction={"row"}
                                            justifyContent={"space-evenly"}
                                            spacing={2}   
                                            m={3}  
                                        >
                                            <RHFTextField name={"fullName"} label="Full Name" />
                                            <RHFTextField name={"fullName"} label="Full Name" />
                                        </Stack>
                                        <Stack
                                            direction={"row"}
                                            justifyContent={"space-evenly"}
                                            spacing={2}   
                                            m={3}  
                                        >
                                            <RHFTextField name={"fullName"} label="Full Name" />
                                            <RHFTextField name={"fullName"} label="Full Name" />
                                        </Stack>

                                        <Stack
                                            direction={"row"}
                                            justifyContent={"space-evenly"}
                                            spacing={2}   
                                            m={3}  
                                        >
                                            <RHFTextField name={"fullName"} label="Full Name" />
                                            <RHFTextField name={"fullName"} label="Full Name" />
                                        </Stack>
                                        <Stack
                                            direction={"row"}
                                           justifyContent={"center"}
                                        >
                                            <Button                
                                                color='inherit'
                                                size='large'
                                                type='submit' 
                                                variant='contained' 
                                                sx={{
                                                    bgcolor: 'text.primary',
                                                    color: (theme) => theme.palette.mode === "light" ?  "common.white" : "grey.800",
                                                    '&:hover': {
                                                        bgcolor: "text.primary",
                                                        color: (theme) => theme.palette.mode === 'light' ? "common.white" : "grey.800",
                                                    }
                                                }}              
                                            >
                                                Create Agent
                                            </Button>           
                                        </Stack>
                                    </Box>
                                </Item>
                            </Grid>                       
                        </Grid>
                    </Box>
                </FormProvider>
               </Stack>
            </Stack>
        </Box>
    );
};

export default CreateAgent;