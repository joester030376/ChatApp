import {
    Box,
    Stack,
    Typography,
    Divider,
    Avatar
} from '@mui/material';
import AdminDashboardHeader from '../../Admin/dashboard/AdminDashboardHeader';
import {useTheme} from '@mui/material/styles';
import AdminViewMessages from './AdminViewMessages';
import Footer from '../../Conversation/Footer';


const AdminDashboard = () => {

    const theme = useTheme();

    return (
        <Stack
        direction="column"
        height={"100%"}
        maxHeight={"100vh"}
        width={"auto"}
    >
        {/* Chat Header */}
       <AdminDashboardHeader />

        {/* Msg */}
        <Box
            width={"100%"}
            sx={{
                flexGrow: 1,
                height: "100%", 
                overflowY: "scroll",
                backgroundColor: theme.palette.background.paper                                         
            }}
        >
            <AdminViewMessages />

        </Box>
        
    </Stack>
    );
}

export default AdminDashboard;