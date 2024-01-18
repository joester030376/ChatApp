import React, { useEffect } from "react";
import { Stack, Box, Container} from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import { ShowSnackbar } from "../../redux/slices/app";
import { socket, connectSocket } from '../../utils/socket';
import PrimaryAppBar from "../../components/appbar/PrimaryAppbar";

const DashboardLayout = () => {

  const dispatch = useDispatch();

  // const {isLoggedIn} = useSelector((state) => state.auth);
  const isLoggedIn = true;

  const user_id = window.localStorage.getItem("user_id");

  useEffect(() => {

    if(isLoggedIn) {
      window.onload = function () {
        if(!window.location.hash) {
          window.location = window.location + '#loaded';
          window.location.reload();
        }
      }

      //window.reload();

      if(!socket) {
        connectSocket(user_id);
      }

      // "new_friend_request"
      socket.on("new_friend_request", (data) => {
        dispatch(ShowSnackbar({severity: "success", message: data.message }));
      });

      socket.on("request_accepted", (data) => {
        dispatch(ShowSnackbar({severity: "success", message: data.message }));
      });
      socket.on("request_sent", (data) => {
        dispatch(ShowSnackbar({severity: "success", message: data.message }));
      });
    }

    return () => {
      socket.off("new_friend_request");
      socket.off("request_accepted");
      socket.off("request_sent");
    }

  }, [isLoggedIn, socket]);
 
  if(!isLoggedIn) {
    return <Navigate to="/auth/login" />
  }

  return (   
      <Box
          width={"100%"}
          height={"100vh"} 
          sx={{
            backgroundColor: "rgb(250, 250, 250)",             
          }}
      >
        <Stack
            direction={"row"}  
        >
            <Stack width={"60px"} height={"100vh"}>
                <SideBar />
            </Stack>
            <Stack
                direction={"column"}
            >
                <Box
                  width={"calc(100vw - 60px)"}
                  height={"60px"}                  
                >
                    <PrimaryAppBar />
                </Box>
                <Container
                  maxWidth="xl"                           
                >
                    <Box sx={{padding: "20px", height: 'calc(100vh - 60px)'}}>
                        <Box                    
                          height={"100%"}
                          width={"100%"}
                          sx={{
                            border: "1px solid black",
                          }}
                        >
                          <Outlet />
                        </Box>
                    </Box>
                </Container>
            </Stack>
        </Stack>
       
      </Box>
    
  );
};

export default DashboardLayout;
