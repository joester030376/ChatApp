import { useState, forwardRef } from 'react';
import {Box, Dialog, DialogActions, DialogContent, DialogTitle, Typography, Stack, Slide, Button, Alert, IconButton, Grid, Avatar} from '@mui/material';
import FormProvider from '../../components/hook-form/FormProvider';
import { XCircle } from '@phosphor-icons/react';
import RHFTextField from '../../components/hook-form/RHFTextField';
import * as Yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import { faker } from '@faker-js/faker';
import { useTheme } from '@mui/material/styles';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });  

const CreateNewGroup = ({open, handleClose}) => {

    const theme = useTheme();

    const [groupChatName, setGroupChatName] = useState();

    const GroupNameSchema = Yup.object().shape({
        groupName: Yup.string().required("Group name is required"),        
    });

    const defaultValues = {
        groupName: "",       
    };

    const methods = useForm({
        resolver: yupResolver(GroupNameSchema),
        defaultValues,
    });

    const {
        reset, 
        setError, 
        handleSubmit, 
        formState: {errors, isSubmitting, isSubmitSuccessful},
    } = methods;

    const onSubmit = async () => {
        try {
            // submit data to backend
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

  return (
    <>
        <Dialog
            maxWidth="md" 
            open={open} 
            onClose={handleClose}
            keepMounted
            TransitionComponent={Transition}
            tran
            sx={{
                p: 4,               
            }}  
        >
            <Box 
                width={600}
            >
                <DialogTitle>
                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        sx={{
                            width: "100%"
                        }}
                    >
                        <Typography>
                            Create New Group
                        </Typography>
                        <Button onClick={handleClose}>
                            <XCircle size={32} weight="fill" /> 
                        </Button> 
                    </Stack>
                </DialogTitle>
                <DialogContent>                    
                    <FormProvider
                        methods={methods}
                        onSubmit={handleSubmit(onSubmit)} 
                    >
                        <Stack
                            direction={"column"}
                            alignItems={"center"}
                            sx={{
                                width: "100%"
                            }}
                            spacing={3}
                            p={3}
                        >

                            {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}

                            <RHFTextField 
                                name={"groupChatName"} 
                                label={"Name"} 
                            />

                            <Box 
                                component="fieldset"
                                p={1}
                                sx={{
                                    width: "100%",
                                    borderRadius: "10px",
                                    height: "200px",
                                    overflowY: "scroll"
                                }}
                            >
                                <legend><span style={{ padding: "1px 8px", fontSize: "12px"}}>Members</span></legend>
                                
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>                                     
                                    {
                                        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((el) => {

                                            return (
                                                <>
                                                    <Grid item >
                                                        <Box
                                                            sx={{
                                                                height: 30,                                                
                                                            }}
                                                        >
                                                            <Stack
                                                                direction={"row"}
                                                                alignItems={"center"}
                                                                sx={{
                                                                    backgroundColor: "lightgray",
                                                                    borderRadius: "50px",                                                    
                                                                    height: "24px",
                                                                    border: "1px solid",
                                                                    borderColor: "black"
                                                                }}               
                                                            >
                                                                <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} sx={{height: 24, width: 24}} />
                                                                <Typography variant='caption' p={0.5}>
                                                                    {faker.name.firstName()}
                                                                </Typography>
                                                                <XCircle size={24}/>
                                                            </Stack>
                                                        </Box>
                                                    </Grid>
                                                </>
                                            );
                                        })
                                    }                                   
                                </Grid>
                            </Box>
                        </Stack>
                    </FormProvider>                                      
                </DialogContent>    
                <DialogActions>                            
                    <Button variant='contained' onClick={handleClose}>Apply</Button>
                </DialogActions>                  
            </Box>
        </Dialog>
    </>
  )
}

export default CreateNewGroup;