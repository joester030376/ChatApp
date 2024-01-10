import {Stack, Typography, Link} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import VerifyForm from '../../sections/auth/VerifyForm';

const Verify = () => {
  return (
    <>
         <Stack
            spacing={2}
            sx={{
                mb: 5, position: "relative"
            }}
        >
            <Typography variant="h4">Verify OTP - Text 2 Them</Typography>
            <Stack direction={"row"} spacing={0.5} alignItems={"center"}>
                <Typography variant="body2">Already A User?</Typography>
                <Link to="/auth/login" component={RouterLink} variant="subtitle2">
                    Login
                </Link>
            </Stack>
            {/* Login Form */}
            <VerifyForm />          
           
        </Stack>
    </>
  )
}

export default Verify;