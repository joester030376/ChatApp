import * as Yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import FormProvider from "../../components/hook-form/FormProvider";
import { Stack, Alert, Button } from "@mui/material";
import RHFTextField from '../../components/hook-form/RHFTextField';
import { ForgotPassword } from '../../redux/slices/auth';
import { useDispatch } from 'react-redux';

const ResetPasswordForm = () => {

    const dispatch = useDispatch();

    const LoginSchema = Yup.object().shape({
        email: Yup.string().required("Email is required").email("Email must be valid email address.")        
    });

    const defaultValues = {
        email: "demo@text2them.com",       
    };

    const methods = useForm({
        resolver: yupResolver(LoginSchema),
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
            // data = {email}
            // submit data to backend
            dispatch(ForgotPassword(data));

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
        >
            {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}

        <Stack
                direction={{ xs: "column", sm: "row"}}
                spacing={2}
        >
                 <RHFTextField name={"email"} label="Email" />
        </Stack>
       
            <Button
                fullWidth
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
                Send Password Reset
            </Button>
            
        </Stack>        

    </FormProvider>
  )
}

export default ResetPasswordForm;