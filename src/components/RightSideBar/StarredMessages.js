import { Box, Stack, Typography, IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import Header from './Header';

const StarredMessages = () => {
  const theme = useTheme();
    const dispatch = useDispatch(); 

    return (
        <Box 
            sx={{
                width: 320,
                height: "100vh"
            }}
        >
            <Header HeaderType={"STARRED"} />

            <Stack 
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={2}            
            >
              


            </Stack>


        </Box>
      )
}

export default StarredMessages;