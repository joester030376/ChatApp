import { Box, Stack, Typography, Divider} from '@mui/material';
import {useTheme} from '@mui/material';
import ProfileForm from '../../../components/forms/ProfileForm';
import NoChatSVG from "../../../assets/Illustration/NoChat";

const Profile = () => {

    const theme = useTheme();
    
  return (
    <Box
        width={"100%"}
        height={"100%"}       
      >
        <Stack
            direction={"row"}
            height={"inherit"}
        >
            <Stack
                  direction={"row"}
                  height={"100%"}
                  sx={{
                    width: "320px",
                    border: "1px solid black"       
                  }}
              >
                <Box 
                    sx={{
                        position: "relative", 
                        height: "100%",              
                        width: 400,
                        backgroundColor: theme.palette.mode === "light" ? "#fff" : "rgb(30, 30, 30)",
                        boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)"
                    }}
                >
                   <Stack p={3} spacing={3} sx={{height: "100%"}}>
                        <Stack
                            direction={"column"}
                            width={"100%"}
                            spacing={2}
                        >
                            <Stack 
                                direction={"column"}
                            >
                                <Stack
                                    direction={"row"}
                                    alignItems={"center"}
                                    spacing={3}
                                    p={1}
                                >                        
                                    <Typography variant='h5'>
                                        Profile
                                    </Typography>
                                </Stack>  
                                <Divider />                    
                            </Stack>
                            <ProfileForm />
                        </Stack> 
                   </Stack>
                </Box>
              </Stack>
              <Stack
                width={"100%"}                
              >
                <Box
                    sx={{
                      height: "calc(100vh - 100px)",
                      width: "100%",                      
                      backgroundColor: theme.palette.mode === "light" ? "#F0F4FA" : theme.palette.background.paper,
                    }}
                >
                    <Stack
                      spacing={2}
                      sx={{ height: "100%", width: "100%"}}
                      alignItems={"center"}
                      justifyContent={"center"}   
                    >
                      <NoChatSVG />
                        <Typography
                          variant="subtitle2"
                        >
                            Select a conversation or start a new one
                        </Typography>
                    </Stack>                            
                </Box>
            </Stack>
        </Stack>
    </Box>
  )
}

export default Profile;