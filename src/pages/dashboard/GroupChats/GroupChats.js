import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Stack, Typography, Tooltip, Divider, IconButton } from '@mui/material';
import { Search, SearchIconWrapper, StyledInputBase } from '../../../components/Search';
import CreateNewGroup from '../../../sections/creategroup/CreateNewGroup';
import AllConversations from '../../../components/AllConversations';
import { Plus } from '@phosphor-icons/react';
import { useSelector, useDispatch } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';

const GroupChats = () => {

    const theme = useTheme();
    const {sidebar, room_id, chat_type} = useSelector((store) => store.app); 

    const [openGroupBlock, setGroupBlock] = useState(false);

    const handleCloseGroupBlock = () => {
        setGroupBlock(false);
    }

    const handleOpenGroupBlock = () => {
        setGroupBlock(true);
    };

  return (
    <>
    <Box 
            sx={{
                position: "relative", 
                height: "100%",              
                width: 400,
                backgroundColor: theme.palette.mode === "light" ? "#fff" : "rgb(30, 30, 30)",
                boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)"
            }}
        >
            <Stack p={3} spacing={2}  sx={{height: "100%"}} >
                <Stack 
                    direction={"column"}
                    width={"100%"}  
                    spacing={2}                  
                >
                    <Stack 
                        height={"50px"}
                        direction={"row"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        spacing={1}
                    >
                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            spacing={1}
                        >
                            <Typography variant="h6">Group Msgs</Typography>
                            <Typography 
                                variant="subtitle2"
                                sx={{
                                    width: "25px", 
                                    lineHeight: "25px", 
                                    borderRadius: "50%", 
                                    textAlign: "center", 
                                    backgroundColor: "rgb(50, 143, 168)",
                                    color: "white",
                                }}                            
                            >
                            6   
                            </Typography>
                        </Stack>
                        <Stack>
                            <Tooltip title="Add Group">
                                <IconButton
                                    onClick={handleOpenGroupBlock}
                                >
                                    <Plus size={32} />  
                                </IconButton>
                            </Tooltip>
                        </Stack>
                    </Stack>
                    <Stack>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search'                                
                            }}              
                            />
                        </Search> 
                    </Stack>
                    <Divider />                  
                </Stack>
                <Stack
                    direction={"column"}
                    width={"100%"} 
                    height={"100%"} 
                    spacing={2}  
                    sx={{
                        overflowX: "hidden",
                        scrollbarWidth: "thin",
                        scrollbarColor: theme.palette.primary.dark,
                    }}  
                >
                    <AllConversations chatType={"Group"} />
                </Stack>
            </Stack>
            
        </Box>

        {openGroupBlock && <CreateNewGroup open={openGroupBlock} handleClose={handleCloseGroupBlock} />}

    </>
  )
}

export default GroupChats;