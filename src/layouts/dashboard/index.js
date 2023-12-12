import React from "react";
import { Box, Stack, IconButton } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import appimages from "../../assets/Images/AppImages";
import { Nav_Buttons } from "../../data";


const DashboardLayout = () => {

  const theme = useTheme();

  console.log(theme);

  return (
    <>
    
      <Box
        padding={2}
          sx={{
            backgroundColor: theme.palette.background.paper,
            boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
            height: "100vh",
            width: 100,
          }}
        >
          <Stack direction={"column"} sx={{width: "100%"}} alignItems={"center"} >
              <Box sx={{
                backgroundColor: theme.palette.primary.main,
                height: 64,
                width: 64,
                borderRadius: 1.5,
              }}>
                  <img src={appimages.images.logo} alt="chat app logo" />  

              </Box> 
              {Nav_Buttons.map((el) => (
                <IconButton key={el.index}>
                {el.icon}
              </IconButton>
              ))}
            </Stack>       
        </Box>
     
      <Outlet />
    </>
  );
};

export default DashboardLayout;
