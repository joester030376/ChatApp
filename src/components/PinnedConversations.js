import {Stack, Typography, Box} from '@mui/material';
import ChatElement from '../pages/dashboard/ChatElement';
import { ChatList } from '../data/index';
import { useTheme } from '@mui/material/styles';

const PinnedConversations = ({chatType}) => {

    const theme = useTheme();

  return (
    <>
        <Stack 
            spacing={2.4}
        >
            <Typography 
                variant='subtitle'
                sx={{
                    color: theme.palette.mode === 'light' ? "#000" : theme.palette.text.primary
                }}
            >
                    Pinned
            </Typography>
                <>
                    {(() => {
                        switch (chatType) {

                            case "pinnedChat":        
                                return ChatList.filter((el) => el.pinned).map((el) => <ChatElement {...el} key={el.id} /> ); 

                            case "groupPinnedChat": 
                                return ChatList.filter((el) => el.pinned).map((el) => <ChatElement {...el} key={el.id} /> );      
   
                            default: 
                                break;
                    }})()}   
                </>  
        </Stack>  
    </>
  );
};

export default PinnedConversations;