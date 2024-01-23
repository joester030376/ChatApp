import { Box, Stack, Typography, IconButton, Link} from '@mui/material';
import { useDispatch } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import Header from './Header';
import Message from '../Conversation/Message';

const StarredMessages = () => {
  const theme = useTheme();
    const dispatch = useDispatch(); 

    return (    
      <Box
          sx={{
            position: "relative", 
            height: "100%",              
            width: 320,
            backgroundColor: theme.palette.mode === "light" ? "#fff" : theme.palette.background.paper,               
          }}
      >

        <Header />

        <Stack
            p={1}
            direction={"column"}
            width={"100%"}             
            spacing={2}  
            sx={{
                height: "calc(100% - 64px)",
                overflowY: "scroll",
                overflowX: "hidden",
                scrollbarWidth: "thin",
                scrollbarColor: theme.palette.primary.dark,
            }}  
        >          
            <Message />
        </Stack>        
    </Box>
    )
}

export default StarredMessages;