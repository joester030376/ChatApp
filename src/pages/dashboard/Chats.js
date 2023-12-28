import { Box, Stack, Divider, Button } from '@mui/material';
import { ArchiveBox } from 'phosphor-react';
import { useTheme } from '@mui/material/styles';
import SearchHeader from '../../components/SearchHeader';
import PinnedConversations from '../../components/PinnedConversations';
import AllConversations from '../../components/AllConversations';


const Chats = () => {

    const theme = useTheme();
    console.log(theme);
    
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
                    spacing={1.5} 
                >
                    <ArchiveBox size={24} />               
                    <Button>Archive</Button>                   
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
                
                <PinnedConversations chatType="Chat" />

                <AllConversations chatType="Chat" />
               
            </Stack>
        </Stack>
    </Box>
  )
}

export default Chats