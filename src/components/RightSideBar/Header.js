import {Box, Stack, Typography, IconButton} from '@mui/material';
import { useDispatch } from 'react-redux';
import { ToggleSideBar, UpdateSidebarType } from '../../redux/slices/app';
import { useTheme } from '@mui/material/styles';
import { XCircle, ArrowLeft } from "@phosphor-icons/react";
import { useSelector } from "react-redux";

const Header = ({SidebarHeaderTitle}) => {

    const theme = useTheme();
    const dispatch = useDispatch();
    const {sidebar} = useSelector((store) => store.app);

  return (
    <Box
            p={2}
            sx={{
                height: 64,
                width: "100%",
                backgroundColor: theme.palette.mode === "light" ? "rgb(50, 143, 168)" : "rgb(30, 30, 30)",
                borderBottom: "1px solid rgba(145, 158, 171, 0.24)"
            }}
        >
            <Stack                
                direction={"row"}                   
                alignItems={"center"}
                justifyContent={sidebar.type==="CONTACT" ? "space-between" : ""}
                sx={{
                    width: "100%",
                    height: "100%"
                }}    
            >
            {sidebar.type === "CONTACT" ? (
                <>
                    <Typography variant="body1" fontWeight={600}>
                        Contact Info
                    </Typography>
                    <IconButton 
                        onClick={() => {
                            dispatch(ToggleSideBar());
                        }}
                    >
                        <XCircle size={24} color={theme.palette.mode === 'light' ? "#000" : "#fff"}  />
                    </IconButton>        
                </>
            ) : (
                    <>
                        <IconButton 
                            onClick={() => {
                                dispatch(UpdateSidebarType("CONTACT"));
                            }}
                        >
                            <ArrowLeft size={24}  />
                        </IconButton>  
                        <Typography variant="body1" fontWeight={600}>
                            {sidebar.type === "SHARED" ? "Shared Messages" : "Starred Messages"}
                        </Typography> 
                    </>
            )        
        }
        </Stack>
</Box>
  )
}

export default Header;