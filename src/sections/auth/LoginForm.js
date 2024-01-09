
import {useState} from 'react';
import * as Yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import FormProvider from "../../components/hook-form/FormProvider";
import { Stack, Alert, InputAdornment, IconButton, Link, Button } from "@mui/material";
import RHFTextField from '../../components/hook-form/RHFTextField';
import {Eye, EyeSlash} from '@phosphor-icons/react';
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { LoginUser } from '../../redux/slices/auth';
import { useDispatch } from 'react-redux';

const LoginForm = () => {

    const dispatch = useDispatch();

    const theme = useTheme();
    const [showPassword, setShowPassword] = useState(false);

    const LoginSchema = Yup.object().shape({
        email: Yup.string().required("Email is required").email("Email must be valid email address."),
        password: Yup.string().required("Password is required"),
    });

    const defaultValues = {
        email: "demo@text2them.com",
        password: "demo1234"
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
        // submit data to backend
        dispatch(LoginUser(data));

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
                name={"email"} 
                label={"Email address"} 
            />

            <RHFTextField 
                name={"password"} 
                label={"Password"} 
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
            <Link component={RouterLink} to="/auth/reset-password" variant='subtitle2'>
                   Forgot Password             
                </Link>
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
                Login
            </Button>

        </Stack>
        
    </FormProvider>
    
  );
};

export default LoginForm;