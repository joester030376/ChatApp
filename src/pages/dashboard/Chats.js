import {useEffect, useState} from 'react';
import { Box, Stack, Divider, Button, IconButton, Typography } from '@mui/material';
import { ArchiveBox } from 'phosphor-react';
import { useTheme } from '@mui/material/styles';
import PinnedConversations from '../../components/PinnedConversations';
import AllConversations from '../../components/AllConversations';
import { Search, SearchIconWrapper, StyledInputBase } from '../../components/Search';
import { Users, CircleDashed, MagnifyingGlass } from '@phosphor-icons/react';
import Friends from '../../sections/main/Friends';
import { socket } from '../../utils/socket';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDirectConversations } from '../../redux/slices/conversation';
import OnlineStatus from '../../components/OnlineStatus';


const user_id = window.localStorage.getItem("user_id");

const Chats = () => {

    const dispatch = useDispatch();

    const [openDialog, setOpenDialog] = useState(false);
    const theme = useTheme();

   const {conversations} = useSelector((state) => state.conversation.direct_chat);

   console.log(conversations);
  
    useEffect(() => {
        socket.emit("get_direct_conversations", {user_id}, (data) => {
            // data => list of conversations

        })
    }, []);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

  return (

    <>
        <Box 
            sx={{
                position: "relative", 
                height: "calc(100vh - 104px)",              
                width: 400,
                backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
                boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)"
            }}
        >

            <Stack p={3} spacing={2}  sx={{height: "calc(100vh - 64px)"}} >
            
            <Stack 
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    <Typography 
                        variant="h5"
                        letterSpacing={1}
                    >
                        Chats
                    </Typography>
                    <Box>
                        <IconButton
                            onClick={() => {
                                handleOpenDialog();
                            }}
                        >
                            <Users />
                        </IconButton>
                        <IconButton>
                            <CircleDashed size={32} />
                        </IconButton>
                    </Box>
                </Stack>
                <Stack
                    sx={{
                        width: "100%"
                    }}
                >
                    <Search>
                        <SearchIconWrapper>
                            <MagnifyingGlass color="#709CE6" size={32}/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Stack>       
                
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
                    height={"calc(100vh - 64px)"}
                >
                    <Stack
                         sx={{
                            flexGrow: 1,                    
                            height: "75%",
                            overflowX: "hidden",
                            scrollbarColor: theme.palette.primary.dark,
                        }}
                        spacing={2}     
                    >
                        {/* <PinnedConversations chatType="Chat" /> */}

                        <AllConversations chatType="Chat" conversations={conversations} />      

                    </Stack>                    
                </Stack>
                <Stack>
                    <OnlineStatus />
                </Stack>
                
            </Stack>
            
        </Box>

        { openDialog && <Friends open={openDialog} handleClose={handleCloseDialog} />}

    </>

  )
}

export default Chats