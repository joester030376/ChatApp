import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SelectConversation, ShowSnackbar } from "../../redux/slices/app";
import { socket, connectSocket } from '../../utils/socket';
import MainCRMNavigation from "../../components/CrmUIComponents/MainCRMNavigation";
import { UpdateDirectConversation,  AddDirectConversation} from "../../redux/slices/conversation";

const DashboardLayout = () => {

  const dispatch = useDispatch();
  const {open} = useSelector((state) => state.app.sidebar);

  //const {isLoggedIn} = useSelector((state) => state.auth);
  const { conversations } = useSelector((state) => state.conversation.direct_chat);
  
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

      socket.on("start_chat", (data) => {
        //
        console.log(data);
        const existing_conversation = conversations.find((el) => el.id === data._id);
        if(existing_conversation) {
          // If conversation exists the update conversation
          dispatch(UpdateDirectConversation({conversation: data}));
        } else {
          // Add a new direct conversation to the list
          dispatch(AddDirectConversation({conversation: data}));
        }
        dispatch(SelectConversation({room_id: data._id}));
      });
    }
   
    if(socket) {
      return () => {
        socket.off("new_friend_request");
        socket.off("request_accepted");
        socket.off("request_sent");
        socket.off("start_chat");
      }
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
