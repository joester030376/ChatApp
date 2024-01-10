import {useState} from 'react';
import * as Yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import FormProvider from "../../components/hook-form/FormProvider";
import { Stack, Alert, InputAdornment, IconButton, Link, Button } from "@mui/material";
import RHFTextField from '../../components/hook-form/RHFTextField';
import {Eye, EyeSlash} from '@phosphor-icons/react';
import { NewPassword } from '../../redux/slices/auth';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

const NewPasswordForm = () => {

    const [queryParameters] = useSearchParams();
    const dispatch = useDispatch();
    
    const [showPassword, setShowPassword] = useState(false);

    const NewPasswordSchema = Yup.object().shape({
        password: Yup.string().min(6, "Password must be at least 6 characters.").required("Password is required"),
        passwordConfirm: Yup.string().required("Password is required").oneOf([Yup.ref('password'), null], "Password must match."),
    });

    const defaultValues = {
        password: "",
        passwordConfirm: ""
    };

    const methods = useForm({
        resolver: yupResolver(NewPasswordSchema),
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

            console.log("connecting");
            // submit data to forgot-password
            dispatch(NewPassword({...data, token: queryParameters.get("resetToken") }));
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

            <RHFTextField 
                name={"password"} 
                label={"New Password"} 
                type={showPassword ? "text" : "password"} 
                InputProps={{
                    endAdornment: (
                        <InputAdornment>
                            <IconButton onClick={() => {
                                setShowPassword(!showPassword);
                            }}>
                                {showPassword ? <Eye /> : <EyeSlash />}
                            </IconButton>
                        </InputAdornment>
                    )            
                }}
            />

            <RHFTextField 
                name={"passwordConfirm"} 
                label={"Confirm Password"} 
                type={showPassword ? "text" : "password"} 
                InputProps={{
                    endAdornment: (
                        <InputAdornment>
                            <IconButton onClick={() => {
                                setShowPassword(!showPassword);
                            }}>
                                {showPassword ? <Eye /> : <EyeSlash />}
                            </IconButton>
                        </InputAdornment>
                    )            
                }}
            />

        </Stack>

        <Stack 
            alignItems={"flex-end"}
            sx={{
                my: 2
            }}
        >
            
        </Stack>

        <Stack 
            direction={"row"}
            alignItems={"center"}
            width={"100%"}        
        >
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
                Submit
            </Button>            

        </Stack>
        
    </FormProvider>
  )
}

export default NewPasswordForm;