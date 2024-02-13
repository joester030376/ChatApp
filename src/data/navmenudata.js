import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import {
  ChatCircleDots,
  UserCircleGear,
  Phone,
  Users,
  ChatsCircle,
  Calendar,
  UserList,
  DotOutline
   
} from "@phosphor-icons/react";

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
        icon: <DotOutline size={24} weight="fill" />,
        route: "/generalchat",
        title: "Chat"
      },
      {
        index: 1,
        icon: <DotOutline size={24} weight="fill" />,
        route: "/group",
        title: "Group Chats" 
      },
      {
        index: 2,
        icon: <DotOutline size={24} weight="fill" />,
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
    title: "Agents",
    items: [
        {
          index: 0,
          icon: <DotOutline size={32} weight="fill" />,
          route: "/createagent",
          title: "Create" 
        },
         {
          index: 1,
          icon: <DotOutline size={32} weight="fill" />,
          route: "/agentlist",
          title: "List" 
        },
        
      ]
  },  
  {
    index: 3,
    icon: <UserCircleGear size={32} />,
    route: "/admin",
    title: "Admin",
    items: []      
  },
];

export {
    Nav_Buttons
}