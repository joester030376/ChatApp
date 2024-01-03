import {Box, Divider, IconButton, Stack, Typography, Avatar, Tooltip} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { 
    CaretLeft,
    Gauge,
    User,
    AddressBook,
    PencilSimple,
    FadersHorizontal,
    Lock,
    Gear,
    UsersFour
} from '@phosphor-icons/react';
import { faker } from '@faker-js/faker';
import Agents from '../../components/agents/AgentsDisplay';
import AgentsDisplay from '../../components/agents/AgentsDisplay';

    
const Admin = () => {  
    
    const adminmenu = [
        {
            icon: <Gauge size={24} />,
            title: 'Dashboard',           
            divider: true
        },
        {
            icon: <User size={24} />,
            title: 'Contact Mode',            
            divider: true
        },
        {
            icon: <AddressBook size={24} />,
            title: 'Address Type',           
            divider: true
        },
        {
            icon: <PencilSimple size={24} />,
            title: 'Subscription',
            divider: true
        },
        {
            icon: <Lock size={24} />,
            title: 'Roles',
            divider: true
        },
        {
            icon: <UsersFour size={24} />,
            title: 'Agents',
            divider: true
        },
        {
            icon: <FadersHorizontal size={24} />,
            title: 'Configuration',
            divider: true
        },        
        {
            icon: <Gear size={24} />,
            title: 'General Settings',
        },
        
    ]    

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
                    <IconButton>
                        <CaretLeft size={32} />
                    </IconButton>
                    <Typography variant='h5'>
                       Admin
                    </Typography>
                </Stack>
                <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={3}
                    p={3}
                >
                    <Avatar 
                        src={faker.image.avatar()} 
                        alt={faker.name.fullName()} 
                        sx={{
                            height: 75,
                            width: 75
                        }}
                    
                    />

                    <Stack
                            spacing={0.2}
                            direction={"column"}
                        >
                            <Typography variant='subtitle2'>
                                {faker.name.fullName()}
                            </Typography>
                            <Typography variant='caption'>
                                Administrator
                            </Typography>    
                    </Stack> 
                </Stack>
                <Stack spacing={4} p={3}>        
                {
                    adminmenu.map((el, index) => <>
                        {console.log(el.route)}
                        <Stack 
                            spacing={2} 
                            sx={{cursor: "pointer"}}
                        >
                            <Stack                                
                                direction={"row"} 
                                spacing={2} 
                                alignItems={"center"}
                            >
                                    <Tooltip title={el.title}>
                                        {el.icon}  
                                    </Tooltip>                              
                                    <Typography variant='body2'>{el.title}</Typography>
                               

                            </Stack>
                        </Stack>
                        {el.divider && <Divider variant='middle'/>}
                    </>)}
                </Stack>  
            </Box>
            {/* Right Panel */}
            <Box
                sx={{
                    height: "100vh",
                    width: "calc(100vw - 420px)",
                    backgroundColor: theme.palette.mode === "light" ? "#F0F4FA" : theme.palette.background.paper,
                    
                }}               
            >   

                <AgentsDisplay />

            </Box>
        </Stack>
        </>
    );
}

export default Admin;