import { useState } from 'react';
import {Box, Divider, IconButton, Stack, Typography, Tooltip} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import AllConversations from '../../../components/AllConversations';
import StartCall from '../../../sections/call/StartCall';
import { Search, SearchIconWrapper, StyledInputBase } from '../../../components/Search';
import { Plus } from '@phosphor-icons/react';
import SearchIcon from '@mui/icons-material/Search';

const Call = () => {

    const theme = useTheme();

    const [openCallBlock, setOpenCallBlock] = useState(false);

    const handleCloseCallBlock = () => {
        setOpenCallBlock(false);
    }

    const handleOpenCallBlock = () => {
        setOpenCallBlock(true);
     }

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
                        <Typography variant="h6">Call / Video Msgs</Typography>
                        
                    </Stack>
                    <Stack>
                        <Tooltip title="Call/Video Contant">                            
                            <IconButton
                                onClick={handleOpenCallBlock}
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
                <AllConversations chatType={"Call"} />
            </Stack>
        </Stack>
        
    </Box>

    {openCallBlock && <StartCall open={openCallBlock} handleClose={handleCloseCallBlock} />}

</>
  ) 
};

export default Call;