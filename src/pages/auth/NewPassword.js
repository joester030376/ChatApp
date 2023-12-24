import React from 'react';
import { Stack, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { CaretLeft } from '@phosphor-icons/react';
import NewPasswordForm from '../../sections/auth/NewPasswordForm';

const NewPassword = () => {
  return (
    <>
        <Stack
            spacing={2}
            sx={{
                mb: 5,
                position: "relative"
            }}
        >
            <Typography variant="h3" paragraph>
                Reset Password
            </Typography>

            <Typography
                sx={{
                    color: "text.secondary",
                    mb: 5
                }}
            >
                Please set your new password.
            </Typography>

            {/* NewPasswordForm */}
            <NewPasswordForm />

            <Stack
                direction={"row"}
                alignItems={"center"}            
            >                
                <CaretLeft />
                <Link 
                    to="/auth/login" 
                    component={RouterLink} 
                    variant="subtitle2"
                    alignItems={"center"}
                    justifyContent={"center"}
                    sx={{
                        color: "inherit"
                    }}
                >
                    Return to Sign In
                
                </Link>
            </Stack>
                
            
        </Stack>  
    </>
  )
}

export default NewPassword;