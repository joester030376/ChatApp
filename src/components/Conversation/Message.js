import { Box, Stack } from '@mui/material';
import { TimeLine, TextMsg, MediaMsg, ReplyMsg, LinkMsg, DocMsg } from './MsgTypes';
import { Chat_History } from '../../data';

const Message = ({menu}) => {
  return (
    <Box
        p={3}        
    >
        <Stack spacing={3}>
            {Chat_History.map((el, menu) => {
                switch (el.type) {
                    case "divider" :
                        return <TimeLine el={el} key={el.type}/>
                                            
                    case "msg":
                        switch (el.subtype) {
                            case "img":
                                // Img msg
                                return <MediaMsg el={el} menu={menu} />                               
                            case "doc":
                                // Doc msg
                                return <DocMsg el={el} menu={menu}/>
                            case "link":
                                // Link msg
                                return <LinkMsg el={el} menu={menu}/>
                            case "reply":
                                // Reply msg
                                return <ReplyMsg el={el} menu={menu}/>

                            default: 
                                // Text Msg
                                return <TextMsg el={el} menu={menu}/>                                   
                        }   
                   
                    default: 
                       break;                              
                }
            })}
        </Stack>
    </Box>
  )
}

export default Message;