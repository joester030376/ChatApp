import {Box, Button, Divider, IconButton, Stack, Typography} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import SearchHeader from '../../components/SearchHeader';
import { Phone } from '@phosphor-icons/react';
import { CallLogElement } from '../../components/CallElement';
import { CallLogs } from '../../data';
import PinnedConversations from '../../components/PinnedConversations';
import AllConversations from '../../components/AllConversations';

const Call = () => {

    const theme = useTheme();

  return (
    <Box 
        sx={{
            position: "relative", 
            width: 320,
            backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
            boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)"
        }}
    >
        <Stack p={3} spacing={2}  sx={{height: "100vh"}} >
            
            <SearchHeader header={"Chats"} />
            
            <Stack spacing={1}>  
                <Stack
                    direction={"row"}
                    alignItems={"center"}  
                    justifyContent={"space-between"}  
                    spacing={1.5} 
                >
                    <Typography>
                        Start new conversation
                    </Typography>               
                    <IconButton>
                        <Phone size={24} color={theme.palette.primary.main} />
                    </IconButton>       
                </Stack>
                <Divider />
            </Stack>
            <Stack
                direction={"column"}
                sx={{
                    flexGrow: 1,                    
                    height: "100%",
                    overflowX: "hidden",
                    scrollbarColor: theme.palette.primary.dark,
                }}
                spacing={2}
            >
                <PinnedConversations chatType={"Call"} />
            
                <AllConversations chatType={"Call"} />
               
            </Stack>
        </Stack>
    </Box>
  )
}

export default Call;