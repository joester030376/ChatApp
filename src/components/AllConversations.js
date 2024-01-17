import { Stack, Typography} from '@mui/material';
import { CallLogs, ChatList } from '../data';
import ChatElement from './ChatElement';
import { useTheme } from '@mui/material/styles';
import { CallLogElement } from './CallElement';

const AllConversations = ({chatType, conversations}) => {

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
            {chatType} Conversations
        </Typography>
        <>
            {(() => {
                switch (chatType) {

                    case "Chat":        
                        return ChatList.filter((el) => !el.pinned).map((el) => <ChatElement {...el} key={el.id} /> ); 

                    case "Group": 
                        return ChatList.filter((el) => !el.pinned).map((el) => <ChatElement {...el} key={el.id} /> );      

                    case "Call":
                        return CallLogs.filter((el) => !el.pinned).map((el) => <CallLogElement {...el} key={el.id} /> ); 

                    default: 
                        break;
            }})()}   
        </>  
    </Stack>  
  )
}

export default AllConversations;