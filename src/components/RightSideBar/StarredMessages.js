import { Box, Stack, Typography, IconButton, Link} from '@mui/material';
import { useDispatch } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import Header from './Header';
import Message from '../Conversation/Message';

const StarredMessages = () => {
  const theme = useTheme();
    const dispatch = useDispatch(); 

    return (    
      
      <Box sx={{width: 320, height: "100vh"}}>
      <Stack
          sx={{
              height: "100%"
          }}
      >   
          {/* Header */}
          <Header />
         
          {/* Body */}
          <Stack
              p={3}
              spacing={3}                    
              sx={{
                  height: "100%",
                  position: "relative",
                  flexGrow: 1,
                  overflowY: "scroll",
                  overflowX: "hidden"
              }}
          >
            <Message />

                
          </Stack>  
        </Stack>
    </Box>
   
    )
}

export default StarredMessages;