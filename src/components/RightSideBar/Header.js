import {Box, Stack, Typography, IconButton} from '@mui/material';
import { useDispatch } from 'react-redux';
import { ToggleSideBar, UpdateSidebarType } from '../../redux/slices/app';
import { useTheme } from '@mui/material/styles';
import { XCircle, ArrowLeft } from "@phosphor-icons/react";
import { useSelector } from "react-redux";

const Header = ({HeaderType}) => {

    const theme = useTheme();
    const dispatch = useDispatch();
    const {sidebar} = useSelector((store) => store.app);

  return (
    <Box 
        sx={{
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
            width: "100%",
            height: 100,
            backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background
        }}
    >
        <Stack
            direction={"row"}
            alignItems={"center"}  
            justifyContent={"space-between"}   
            spacing={3}             
            sx={{
                height: "100%",
                p: 2
            }}
        >
            {sidebar.type === "CONTACT" ? (
                <>
                    <Typography variant="body1">
                        Contact Info
                    </Typography>
                    <IconButton 
                        onClick={() => {
                            dispatch(ToggleSideBar());
                        }}
                    >
                        <XCircle size={24}  />
                    </IconButton>        
                </>
            ) : (
                    <IconButton 
                        onClick={() => {
                             dispatch(UpdateSidebarType("CONTACT"));
                        }}
                    >
                        <ArrowLeft size={24}  />
                    </IconButton>        
            )        
        }
        </Stack>
</Box>
  )
}

export default Header;