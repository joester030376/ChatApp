
import {Avatar, Alert, Button, Stack, Typography} from '@mui/material';
import FormProvider from '../hook-form/FormProvider';
import RHFTextField from '../../components/hook-form/RHFTextField';
import * as Yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import { useTheme } from '@mui/material';
import { faker } from '@faker-js/faker';
import { useCallback } from 'react';

const ProfileForm = () => {

    const theme = useTheme();
    
    const ProfileSchema = Yup.object().shape({
        name: Yup.string().required("Email is required"),
        about: Yup.string().required("About is required"),
        avatarUrl: Yup.string().required("Avatar is required.").nullable(true)
    });

    const defaultValues = {
        name: "",
        about: "",
    };

    const methods = useForm({
        resolver: yupResolver(ProfileSchema),
        defaultValues,
    });

    const {
        reset, 
        watch,
        control,
        setValue,
        setError, 
        handleSubmit, 
        formState: {errors, isSubmitting, isSubmitSuccessful},
} = methods;

const balues = watch();

const handleDrop = useCallback((acceptedFiles) => {
    
    const file = acceptedFiles[0];

    const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file)
    })

    if(file) {
        setValue("avatarUrl", newFile, {shouldValidate: true});
    }

},[setValue])


const onSubmit = async (data) => {
    try {
        // submit data to backend
        console.log("Data", data);
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
  
    <FormProvider 
        methods={methods} 
        onSubmit={handleSubmit(onSubmit)}        
    >
        <Stack 
            spacing={3}
            direction={"column"}     
            p={3}   
        >
                    {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}

                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        spacing={3}
                        p={3}
                    >
                        <Avatar 
                            src={faker.image.avatar()} 
                            alt={faker.name.fullName()} 
                            sx={{
                                height: "120px",
                                width: "120px"
                            }}    
                        />                    
                    </Stack>
            <RHFTextField 
                name={"name"} 
                label={"Name"} 
                helperText={"This name is visible to all your contacts"}
            />
            <RHFTextField 
                name={"about"} 
                label={"About"} 
                multiline
                rows={4}
                maxRows={5}
            />
            <Stack
                alignItems={"center"}
                direction={"row"}
                justifyContent={"end"}
            >
                <Button variant='outlined'color='primary' size='large' type='submit'>Save</Button>
        </Stack>
        </Stack>
        
       
    </FormProvider>
    
  );
};

export default ProfileForm;