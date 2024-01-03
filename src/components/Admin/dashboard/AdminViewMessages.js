import * as React from 'react';
import { Box, Stack, Typography, Avatar, Button, IconButton, Grid, Item, Divider} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AgentPuck from './AgentPuck';
import LiveCallPuck from './LiveCallPuck';
import ChatMessagePuck from './ChatMessagePuck';

const AdminViewMessages = () => {

    const theme = useTheme();

    return (
        <>
            <Stack
                direction={"column"}                          
            >     
                <Stack
                    direction={"row"}
                    justifyContent={"flex-start"}
                    m={1}
                    sx={{
                        border: "1px solid lightGrey"
                    }}
                >
                    <Box 
                        width={"25%"}
                    >
                        <AgentPuck />
                    </Box>
                    <Box 
                        width={"25%"}
                    >
                        <LiveCallPuck />
                    </Box>
                    <Box 
                        width={"50%"}
                    >
                        <Stack
                            direction={"row"}
                            ml={1}
                            sx={{
                                overflowX: "auto"
                            }}
                        >
                            
                            <ChatMessagePuck />   
                            
                        </Stack>
                    </Box>
                </Stack>
            </Stack>
       </>
    );
}

export default AdminViewMessages;