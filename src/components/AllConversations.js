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
            { chatType === 'Chat' ? 'All Chats' : 'Group Chats' }
        </Typography>
        <>
            {(() => {
                switch (chatType) {

                    case "Chat":        
                        return ChatList.filter((el) => !el.pinned).map((el) => <ChatElement {...el} key={el.id} /> ); 

                    case "Group": 
                        return ChatList.filter((el) => !el.pinned).map((el) => <ChatElement {...el} key={el.id} /> );      

                    default: 
                        break;
            }})()}   
        </>  
    </Stack>  
  )
}

export default AllConversations;