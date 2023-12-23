
import { Box, Stack, Typography, IconButton, Divider } from "@mui/material";
import { GoogleLogo, GithubLogo, TwitterLogo } from '@phosphor-icons/react';

const AuthSocial = () => {
  return (
    <Box>
        <Divider 
            variant="middle" 
            sx={{
                my: 2.5, 
                color: "text.disabled", 
                '&::before, &::after': {
                    borderTopStyle: "dashed"
                }}}
            >
            <Typography variant="overline">OR</Typography>
        </Divider>
        <Stack
            direction={'column'}
            alignItems={"center"}
            justifyContent={"center"}
            spacing={2}
        >                      
            <Stack
                alignItems={"center"}
                direction={"row"}
                spacing={2}           
            >
                <IconButton>
                    <GoogleLogo size={32} color="#DF3E30"/>
                </IconButton>
                <IconButton>
                    <GithubLogo size={32} color="inherit"/>
                </IconButton>
                <IconButton>
                    <TwitterLogo size={32} color="#1C9CEA" />
                </IconButton>
            </Stack>
        </Stack>
    
    </Box>
  )
}

export default AuthSocial;