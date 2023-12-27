import { useState } from 'react';
import { Stack, Box, Button, Divider, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SearchHeader from '../../components/SearchHeader';
import { Plus } from '@phosphor-icons/react';
import PinnedConversations from '../../components/PinnedConversations';
import AllConversations from '../../components/AllConversations';
import CreateNewGroup from '../../sections/creategroup/CreateNewGroup';

const Group = () => {

    const theme = useTheme();

    const [openGroupBlock, setGroupBlock] = useState(false);

    const handleCloseGroupBlock = () => {
        setGroupBlock(false);
    }

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
                            spacing={2}           
                        >
                            <Typography>
                                Create New Group
                            </Typography>            
                            <Button
                                onClick={() => {
                                    setGroupBlock(true);                                
                                }}
                            >
                                <Plus size={24} style={{color: theme.palette.primary.main }}/> 
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

                        <PinnedConversations chatType="Group" />

                        <AllConversations chatType="Group" />

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
        {openGroupBlock && <CreateNewGroup open={openGroupBlock} handleClose={handleCloseGroupBlock} />}
    </>
  )
}

export default Group;