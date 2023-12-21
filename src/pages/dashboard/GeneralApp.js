import Conversation from "../../components/Conversation";
import Chats from "./Chats";
import { Stack, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Contact from "../../components/RightSideBar/Contact";
import { useSelector } from "react-redux";
import SharedMessages from "../../components/RightSideBar/SharedMessages";
import StarredMessages from "../../components/RightSideBar/StarredMessages";

const GeneralApp = () => {
  const theme = useTheme();
  const {sidebar} = useSelector((store) => store.app);

  return (
    <Stack
      direction={"row"}
      sx={{
        width: "100%"
      }}
    >
      {/* Chats */}     
      <Chats />
     
      <Box
        sx={{
          height: "100%",
          width: sidebar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)",
          backgroundColor: theme.palette.mode === "light" ? "#F0F4FA" : theme.palette.background.paper,
        }}
      >
        {/* Conversation */}
        <Conversation />
      </Box>

      {/* Contact */}
      {sidebar.open && (() => {
        switch (sidebar.type) {
          case "CONTACT":
            console.log(sidebar.type);
            return <Contact />;
                      
          case "STARRED":

            return <StarredMessages />
          
          case "SHARED":

            return <SharedMessages />;

          default: 
            break;
        }

      })()}
      
    </Stack>
  );
};

export default GeneralApp;
