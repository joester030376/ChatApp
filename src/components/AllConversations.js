import { Stack, Typography} from '@mui/material';
import { ChatList } from '../data';
import ChatElement from '../pages/dashboard/ChatElement';
import { useTheme } from '@mui/material/styles';

const AllConversations = ({chatType}) => {

    const theme = useTheme();

  return (
    <Stack 
        spacing={2.4}
    >
        <Typography 
            variant='subtitle'
            sx={{
                color: theme.palette.mode === 'light' ? "#000" : theme.palette.text.primary
            }}
        >
            All Chats
        </Typography>
        <>
            {(() => {
                switch (chatType) {

                    case "chats":        
                        return ChatList.filter((el) => !el.pinned).map((el) => <ChatElement {...el} key={el.id} /> ); 

                    case "groupChats": 
                        return ChatList.filter((el) => !el.pinned).map((el) => <ChatElement {...el} key={el.id} /> );      

                    default: 
                        break;
            }})()}   
        </>  
    </Stack>  
  )
}

export default AllConversations;