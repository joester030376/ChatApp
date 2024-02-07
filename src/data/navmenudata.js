import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import {
  ChatCircleDots,
  UserCircleGear,
  Phone,
  Users,
  ChatsCircle,
  Calendar,
  UserList
  
} from "phosphor-react";

const Nav_Buttons = [
  {
    index: 0,
    menu_name: "chats-menu",
    icon: <ChatCircleDots size={32} />,
    route: "/app",
    title: "Chats",
    items: [
      {
        index: 0,
        icon: <ChatsCircle size={24} />,
        route: "/generalchat",
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
    index: 1,
    icon: <Calendar size={32} />,
    route: "",
    title: "Calendar",
    items: []
  },  
  {
    index: 2,
    icon: <UserList size={32} />,
    route: "",
    title: "User Lists",
    items: []
  },  
  {
    index: 3,
    icon: <UserCircleGear size={32} />,
    route: "/admin",
    title: "Admin"
  },
];

export {
    Nav_Buttons
}