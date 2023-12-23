import {useState} from 'react';
import * as Yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import FormProvider from "../../components/hook-form/FormProvider";
import { Stack, Alert, Typography, InputAdornment, IconButton, Link, Button } from "@mui/material";
import RHFTextField from '../../components/hook-form/RHFTextField';
import {Eye, EyeSlash} from '@phosphor-icons/react';
import { useTheme } from '@mui/material/styles';


const RegisterForm = () => {

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
    <FormProvider>
        
    </FormProvider>
  )
}

export default RegisterForm