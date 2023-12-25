import { useTheme } from '@mui/material/styles';
import { Box, Divider, IconButton, Stack, Typography, Checkbox} from '@mui/material';
import { CaretLeft } from '@phosphor-icons/react';
import { notificationslist } from '../../data/notificationlist';
import { Link } from 'react-router-dom';

const Notifications = () => {

    const theme = useTheme();

    return (
        <>
           <Stack
            direction={"row"}
            width={"100%"}
        >
            {/* Left Panel */}
            <Box
                sx={{
                    //overflowY: "scroll",
                    height: "100vh",
                    width: 320,
                    backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
                    boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)"
                }}
            >
                <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={3}
                    p={3}
                >
                    <Link to="/settings">
                        <IconButton>
                            <CaretLeft size={32} />
                        </IconButton>
                    </Link>
                    <Typography variant='h5'>
                       Notifications
                    </Typography>
                </Stack>
                
                <Stack        
                    direction={"column"} 
                               
                >       
                    {
                        notificationslist.map((el) => 
                            <>
                                <Stack 
                                    direction="row" 
                                    justifyContent="space-between" 
                                    alignItems="center" 
                                    spacing={3}
                                    pt={3}
                                    pr={3}
                                    pl={3}
                                    pb={1} 
                                    key={el.key}     
                                >
                                    <Stack direction="column">
                                        <Typography variant="body2">
                                            {el.title}
                                        </Typography>
                                        { el.caption != null && 
                                            <Typography variant="caption" fontSize={10}>
                                                {el.caption}
                                            </Typography>
                                        }
                                    </Stack>
                                    <Stack>
                                        { el.selection ? <Checkbox checked /> : <Checkbox /> }
                                    </Stack>                        
                                </Stack> 
                                { el.divider && <Divider variant="middle"/> }
                            </>   
                        )
                    }                       
                </Stack> 
                            
            </Box>
            {/* Right Panel */}
            <Box
                sx={{
                    height: "100%",
                    width: "calc(100vw - 420px)",
                    backgroundColor: theme.palette.mode === "light" ? "#F0F4FA" : theme.palette.background.paper,
                }}
            >                

            </Box>
        </Stack>
        </>
    );

};

export default Notifications;