import { Box, Typography, Stack, InputBase, Divider, Button } from '@mui/material';
import { CircleDashed, MagnifyingGlass, ArchiveBox } from 'phosphor-react';
import { styled, alpha, useTheme } from '@mui/material/styles';
import ChatElement from './ChatElement';
import { ChatList } from '../../data';
import SearchHeader from '../../components/SearchHeader';
import PinnedConversations from '../../components/PinnedConversations';
import AllConversations from '../../components/AllConversations';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 20,
    backgroundColor: alpha(theme.palette.background.default, 1),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%"
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
     
      width: '100%',      
    },
  }));

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
                
                <PinnedConversations chatType="pinnedChat" />

                <AllConversations chatType="chats" />
               
            </Stack>
        </Stack>
    </Box>
  )
}

export default Chats