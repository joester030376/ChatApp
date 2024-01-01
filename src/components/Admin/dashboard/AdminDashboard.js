import {
    Box,
    Stack,
    Typography,
    Divider,
    Avatar
} from '@mui/material';
import AdminDashboardHeader from '../../Admin/dashboard/AdminDashboardHeader';
import AdminViewMessages from './AdminViewMessages';
import {useTheme} from '@mui/material/styles';


const AdminDashboard = () => {

    const theme = useTheme();

    return (
       <Box
            width={"100%"}
            height={"100vh"}
            sx={{    boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)"}}
       >    
            <Stack
                direction="column"  
                pt={2}              
            >
                <Stack
                    p={1}
                    width={"200px"}
                >
                    <AdminDashboardHeader />
                </Stack>
                <Stack
                    p={2}
                >
                    <AdminViewMessages />
                </Stack>
            </Stack>

       </Box>
    );
}

export default AdminDashboard;