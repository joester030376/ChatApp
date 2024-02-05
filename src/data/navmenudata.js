import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import {
  ChatCircleDots,
  Gear,
  GearSix,
  Phone,
  SignOut,
  User,
  Users,
  ChatsCircle,
  
} from "phosphor-react";

const Nav_Buttons = [
  {
    index: 0,
    menu_name: "chats-menu",
    icon: <ChatCircleDots size={24} />,
    route: "/app",
    title: "Chats",
    submenu: [
      {
        index: 0,
        icon: <ChatsCircle size={32} />,
        route: "/chat",
        title: "Chat"
      },
      {
        index: 1,
        icon: <Users size={24} />,
        route: "/group",
        title: "Group Chats" 
      },
      {
        index: 2,
        icon: <Phone size={24} />,
        route: "/call",
        title: "Voice and Video Calling" 
      }
    ]      
  },    
  {
    index: 3,
    icon: <AdminPanelSettingsOutlinedIcon  size={32}/>,
    route: "/admin",
    title: "Admin"
  },
];

export {
    Nav_Buttons
}