import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ShowSnackbar } from "../../redux/slices/app";
import { socket, connectSocket } from '../../utils/socket';
import MainCRMNavigation from "../../components/CrmUIComponents/MainCRMNavigation";

const DashboardLayout = () => {

  const dispatch = useDispatch();
  const {open} = useSelector((state) => state.app.sidebar);

  const {isLoggedIn} = useSelector((state) => state.auth);
  
  const user_id = window.localStorage.getItem("user_id");

  useEffect(() => {
    
    alert(user_id);

    if(isLoggedIn) {
      window.onload = function () {
        if(!window.location.hash) {
          window.location = window.location + '#loaded';
          window.location.reload();
        }
      }

     window.reload();

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
            border: "1px solid black"           
          }}
      >
        <MainCRMNavigation outlet={<Outlet />} />
       
      </Box>
    
  );
};

export default DashboardLayout;
