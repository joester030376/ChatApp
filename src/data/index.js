import { faker } from "@faker-js/faker";
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import {
  ChatCircleDots,
  Gear,
  GearSix,
  Phone,
  SignOut,
  User,
  Users,
  
} from "phosphor-react";

const Profile_Menu = [
  {
    id: 0,
    title: "Profile",
    icon: <User />,
  },
  {
    id: 1,
    title: "Settings",
    icon: <Gear />,    
  },
  {
    id: 2,
    title: "Logout",
    icon: <SignOut />,    
  },
];

const Nav_Buttons = [
  {
    index: 0,
    icon: <ChatCircleDots />,
    route: "/app",
    title: "Chats"    
  },
  {
    index: 1,
    icon: <Users />,
    route: "/group",
    title: "Group Chats" 
  },
  {
    index: 2,
    icon: <Phone />,
    route: "/call",
    title: "Voice and Video Calling" 
  },
  {
    index: 3,
    icon: <AdminPanelSettingsOutlinedIcon />,
    route: "/admin",
    title: "Admin"
  },
];

const Nav_Setting = [
  {
    index: 3,
    icon: <GearSix />,
  },
];

const ChatList = [
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "9:36",
    unread: 0,
    pinned: true,
    online: true,
  },
  {
    id: 1,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "12:02",
    unread: 2,
    pinned: true,
    online: false,
  },
  {
    id: 2,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "10:35",
    unread: 3,
    pinned: false,
    online: true,
  },
  {
    id: 3,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "04:00",
    unread: 0,
    pinned: false,
    online: true,
  },
  {
    id: 4,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 5,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 6,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "10:36",
    unread: 0,
    pinned: false,
    online: true,
  },
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "9:36",
    unread: 0,
    pinned: true,
    online: true,
  },
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "9:36",
    unread: 0,
    pinned: true,
    online: true,
  },
];

const CallLogs = [

  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    pinned: true,
    online: false,
    missed: true,
    incoming: false, 
  },
  {
    id: 1,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    pinned: false,
    online: true,
    missed: false,
    incoming: true, 
  },
  {
    id: 2,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    pinned: false,
    online: false,
    missed: true,
    incoming: true, 
  },
  {
    id: 3,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    pinned: false,
    online: true,
    missed: true,
    incoming: false, 
  },
  {
    id: 4,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    pinned: false,
    online: false,
    missed: true,
    incoming: false, 
  },
];

const MembersList = [

  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.name.firstName()
  },
  {
    id: 1,
    img: faker.image.avatar(),
    name: faker.name.firstName()
  },
  {
    id: 2,
    img: faker.image.avatar(),
    name: faker.name.firstName()
  },
  {
    id: 3,
    img: faker.image.avatar(),
    name: faker.name.firstName()
  },
  {
    id: 4,
    img: faker.image.avatar(),
    name: faker.name.firstName()
  },
  {
    id: 5,
    img: faker.image.avatar(),
    name: faker.name.firstName()
  },
  {
    id: 6,
    img: faker.image.avatar(),
    name: faker.name.firstName()
  },

]

const Chat_History = [
  {
    type: "msg",
    message: "Hi 👋🏻, How are ya ?",
    incoming: true,
    outgoing: false,
  },
  {
    type: "divider",
    text: "Today",
  },
  {
    type: "msg",
    message: "Hi 👋 Panda, not bad, u ?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Can you send me an abstarct image?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Ya sure, sending you a pic",
    incoming: true,
    outgoing: false,
  },

  {
    type: "msg",
    subtype: "img",
    message: "Here You Go",
    img: faker.image.abstract(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    message: "Can you please send this in file format?",
    incoming: false,
    outgoing: true,
  },

  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "reply",
    reply: "This is a reply",
    message: "Yep, I can also do that",
    incoming: false,
    outgoing: true,
  },
];

const Message_options = [
  {
    title: "Reply",
  },
  {
    title: "React to message",
  },
  {
    title: "Forward message",
  },
  {
    title: "Star message",
  },
  {
    title: "Report",
  },
  {
    title: "Delete Message",
  },
];

const SHARED_LINKS = [
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  }
];

const SHARED_DOCUMENTS = [
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  }
];

export {
  Profile_Menu,
  Nav_Setting,
  Nav_Buttons,
  ChatList,
  Chat_History,
  Message_options,
  SHARED_DOCUMENTS,
  SHARED_LINKS,
  CallLogs,
  MembersList
};
