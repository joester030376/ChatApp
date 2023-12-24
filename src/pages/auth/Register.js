import { Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import RegisterForm from '../../sections/auth/RegisterForm';
import AuthSocial from '../../sections/auth/AuthSocial';

const Register = () => {
  return (
   <>
        <Stack
            spacing={2}
            sx={{
                mb:5,
                position: "relative"
            }}   
        >
            <Typography variant='h4'>
                Get Started with Text 2 Them
            </Typography>

            <Stack
                direction={"row"}
                alignItems={"center"}
                spacing={0.5}
            >
                <Typography variant='body2'>Already have an account?</Typography>
                <Link component={RouterLink} to="/auth/login" variant='subtitle2'>
                    Sign in                
                </Link>
            </Stack>
            {/* Register */}
            <RegisterForm />
            <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                spacing={0.5}
            >
                <Typography 
                    variant='caption'
                    sx={{
                        color: "text.secondary",
                        mt: 3,                                 
                    }}
                > 
                    {'By signing up, I agree to '}
                
                    <Link
                        underline="always"
                        color={"text.primary"}
                    >
                        Terms of Service 
                    </Link>    
                        {' and '}
                    <Link
                        underline="always"
                        color={"text.primary"}
                    >
                    Privacy Notice
                    </Link>
                </Typography>               
            </Stack>
            <AuthSocial />
        </Stack>
   </>
  )
}

export default Register;