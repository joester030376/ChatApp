import Conversation from "../../components/Conversation";
import Chats from "./Chats";
import { Stack, Box, Typography, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Contact from "../../components/RightSideBar/Contact";
import { useSelector } from "react-redux";
import SharedMessages from "../../components/RightSideBar/SharedMessages";
import StarredMessages from "../../components/RightSideBar/StarredMessages";
import NoChatSVG from "../../assets/Illustration/NoChat";

const GeneralApp = () => {
  const theme = useTheme();
  const {sidebar, room_id, chat_type} = useSelector((store) => store.app); 

  return (
      <Box
        width={"100%"}
        height={"100%"}        
      >
          <Stack
            direction={"row"}
            height={"100%"}
            sx={{
              width: "320px",
              border: "1px solid black"       
          }}
      >

         
        {/* <Chats  /> */}
     
      {/*  <Box
          sx={{
            height: "calc(100vh - 100px)",
            width: sidebar.open ? "calc(100vw - 720px)" : "calc(100vw - 420px)",
            backgroundColor: theme.palette.mode === "light" ? "#F0F4FA" : theme.palette.background.paper,
          }}
        >
          {room_id !== null && chat_type === "individual" ? <Conversation /> :  

            <Stack
              spacing={2}
              sx={{ height: "100%", width: "100%"}}
              alignItems={"center"}
              justifyContent={"center"}   
            >
              <NoChatSVG />
                <Typography
                  variant="subtitle2"
                >
                    Select a conversation or start a new one
                </Typography>
            </Stack>
          }
        
        </Box>

        {/* Contact */}
        {/* {sidebar.open && (() => {
          switch (sidebar.type) {
            case "CONTACT":            
              return <Contact />;
                        
            case "STARRED":

              return <StarredMessages />
            
            case "SHARED":

              return <SharedMessages />;

            default: 
              break;
          }

        })()} */} 
      
    </Stack>



      </Box>
  );
};

export default GeneralApp;
