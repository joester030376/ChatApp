import { Stack, Box, Button, Divider, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SearchHeader from '../../components/SearchHeader';
import { Plus } from '@phosphor-icons/react';
import PinnedConversations from '../../components/PinnedConversations';
import AllConversations from '../../components/AllConversations';

const Group = () => {

    const theme = useTheme();

  return (
    <>
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
                    
                    <SearchHeader header={"Groups"}  />

                    <Stack spacing={1}>  
                        <Stack
                            direction={"row"}
                            alignItems={"center"} 
                            justifyContent={'space-between'}   
                            spacing={1.5}           
                        >
                            <Typography>
                                Create New Group
                            </Typography>            
                            <Button>
                                <Plus size={24} /> 
                            </Button>                   
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

                        <PinnedConversations chatType="groupPinnedChat" />

                        <AllConversations chatType="groupChats" />

                    </Stack>
                </Stack>
            </Box>

            <Box
                sx={{
                    height: "100%",
                    width:  "calc(100vw - 420px)", /* sidebar.open ? "calc(100vw - 740px)" : */
                    backgroundColor: theme.palette.mode === "light" ? "#F0F4FA" : theme.palette.background.paper,
                }}
                
            >
                {/* Conversation */}
       
            </Box>
        </Stack>
    </>
  )
}

export default Group;