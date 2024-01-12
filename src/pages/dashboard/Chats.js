import {useState} from 'react';
import { Box, Stack, Divider, Button, IconButton, Typography,  } from '@mui/material';
import { ArchiveBox } from 'phosphor-react';
import { useTheme } from '@mui/material/styles';
import PinnedConversations from '../../components/PinnedConversations';
import AllConversations from '../../components/AllConversations';
import { Search, SearchIconWrapper, StyledInputBase } from '../../components/Search';
import { Users, CircleDashed, MagnifyingGlass } from '@phosphor-icons/react';
import Friends from '../../sections/main/Friends';

const Chats = () => {

    const [openDialog, setOpenDialog] = useState(false);
    const theme = useTheme();

    const handleOpenDialog = () => {
        setOpenDialog(true);
    }

    const handleCloseDialog = () => {
        setOpenDialog(false);
    }

  return (

    <>
        <Box 
            sx={{
                position: "relative", 
                width: 320,
                backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
                boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)"
            }}
        >

            <Stack p={3} spacing={2}  sx={{height: "100vh"}} >
            
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

        { openDialog && <Friends open={openDialog} handleClose={handleCloseDialog} />}

    </>


  )
}

export default Chats