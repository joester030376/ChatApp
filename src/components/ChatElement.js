import {Box, Stack, Avatar, Typography, Badge} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import StyledBadge from '../components/StyledBadge';
import { useDispatch } from 'react-redux';
import { SelectConversation } from '../redux/slices/app';
import { faker } from '@faker-js/faker';
import { ConstructionOutlined } from '@mui/icons-material';

const ChatElement = ({id, name, img, msg, time, unread, online}) => {    

    const dispatch = useDispatch();
    const theme = useTheme();
    
    return (
        <Box
            onClick={() => {
                dispatch(SelectConversation({room_id: id}));
            }}
            width={"100%"}                       
            p={1.5}
            sx={{
                borderBottom: "1px solid rgba(145, 158, 171, 0.24)"
            }}
        >
            <Stack
                direction={"row"}
                justifyContent={"space-between"}
            >
                <Stack
                    direction="row"
                    alignItems={"center"}
                    spacing={1}
                >
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}  
                        variant={online ? "dot" : ""}                          
                    >
                        <Avatar src={img} alt={faker.name.fullName()} />   
                    </StyledBadge>      
                    <Stack
                        direction={"column"}                                                                 
                    >
                        <Typography variant='subtitle2'>{name}</Typography>
                        <Typography variant='caption'>{msg}</Typography>
                    </Stack>
                </Stack>
                <Stack
                    direction={"column"}
                    alignItems={"center"}
                    spacing={1.5}
                >
                    <Typography variant='caption'>{time}</Typography>
                        <Badge
                            color="primary" 
                            badgeContent={unread}
                        />  
                </Stack>
             </Stack>
        </Box>
    )
}

export default ChatElement;

