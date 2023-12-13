import React, {useState} from "react";
import { Box, Stack, IconButton, Divider } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import appimages from "../../assets/Images/AppImages";
import { Gear } from "phosphor-react";
import { Nav_Buttons } from "../../data";


const DashboardLayout = () => {

  const theme = useTheme();

  const [selected, setSelected] = useState(0);

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
          <Stack direction={"column"} sx={{width: "100%"}} alignItems={"center"} spacing={3} >
              <Box sx={{
                backgroundColor: theme.palette.primary.main,
                height: 64,
                width: 64,
                borderRadius: 1.5,
              }}>
                  <img src={appimages.images.logo} alt="chat app logo" />  

              </Box> 
              <Stack 
                spacing={3} 
                sx={{
                  width: "max-content"
                }}
                  direction="column"
                  alignItems="center"
                >
                {Nav_Buttons.map((el) => (
                  el.index === selected ?
                  <Box 
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 1.5
                    }}
                  >
                    <IconButton key={el.index}
                      sx={{
                        width: "max-content",
                        color: "#fff"
                      }}                    
                    >

                      {el.icon}
                    </IconButton>
                  </Box> 
                 : <IconButton key={el.index}
                  sx={{
                    width: "max-content",
                    color: "#000"
                  }}                    
                >
                  {el.icon}
                </IconButton>                 
              ))}
              <Divider />  
              <IconButton>
                <Gear size={32} />
              </IconButton>
              </Stack>
              
            </Stack>       
        </Box>
     
      <Outlet />
    </>
  );
};

export default DashboardLayout;
