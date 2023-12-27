import {Box, Button, Divider, Stack, Typography} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import SearchHeader from '../../components/SearchHeader';
import { Phone, Plus } from '@phosphor-icons/react';
import VoiceElement from './VoiceElement';

const Call = () => {

    const theme = useTheme();

  return (
    <Stack
            direction={"row"}
            sx={{
                width: "100%"
            }}
        >
            <Box 
                sx={{
                    position: "relative", 
                    width: 320,
                    backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
                    boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)"
                }}
            >
                <Stack p={3} spacing={2}  sx={{height: "100vh"}} >

                    <SearchHeader header="Call Log" />

                    <Stack spacing={1}>  
                        <Stack
                            direction={"row"}
                            alignItems={"center"} 
                            justifyContent={'space-between'}   
                            spacing={2}           
                        >
                            <Typography>
                                Start New Conversation
                            </Typography>            
                            <Button
                                //onClick={() => {
                                    //setGroupBlock(true);                                
                                //}}
                            >
                                <Phone size={24} style={{color: theme.palette.primary.main }}/>
                            </Button>                   
                        </Stack>
                        <Divider />
                    </Stack>
                    <VoiceElement />




                </Stack>
                

            </Box>
    </Stack>
  )
}

export default Call;