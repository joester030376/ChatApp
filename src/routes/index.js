import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layouts
import DashboardLayout from "../layouts/dashboard";
import AuthLayout from "../layouts/main";

// config
import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        { path: "login", element: <LoginPage /> },
        { path: "register", element: <Register /> },
        { path: "reset-password", element: <ResetPasswordPage />},
        { path: "new-password", element: <NewPasswordPage />},  
        { path: "verify", element: <VerifyOTPPage />}    
      ]
    },
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: "app", element: <GeneralApp /> },
        { path: "settings", element: <Settings />},  
        { path: "notifications", element: <Notifications />}, 
        { path: "generalchat", element: <GeneralChat />},
        { path: "group", element: <GroupPage />},    
        { path: "call", element: <CallPage />},  
        { path: "createagent", element: <CreateAgent />},
        { path: "agentlist", element: <AgentList />},
        { path: "profile", element: <ProfilePage /> },     
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },   
    { path: "", element: <Navigate to="/404" replace /> },
  ]);
}

const GeneralApp = Loadable(lazy(() => import("../pages/dashboard/GeneralChat/GeneralChats.js")),);
const Settings = Loadable(lazy(() => import("../pages/dashboard/Settings/Settings.js")),);
const Notifications = Loadable(lazy(() => import("../pages/dashboard/Notifications")),);
const GroupPage = Loadable(lazy(() => import("../pages/dashboard/GroupChats/Group.js")),);
const CallPage = Loadable(lazy(() => import("../pages/dashboard/CallVideoChat/CallVideoChat.js")),);
const GeneralChat = Loadable(lazy(() => import("../pages/dashboard/GeneralChat/GeneralChats.js") ));
const ProfilePage = Loadable(lazy(() => import("../pages/dashboard/Profile/Profile.js")),);
const CreateAgent = Loadable(lazy(() => import("../pages/dashboard/Agents/CreateAgent.js")),);
const AgentList = Loadable(lazy(() => import("../pages/dashboard/Agents/AgentList.js")),);
const LoginPage = Loadable(lazy(() => import("../pages/auth/Login")),);
const Register = Loadable(lazy(() => import("../pages/auth/Register")),);
const ResetPasswordPage = Loadable(lazy(() => import("../pages/auth/ResetPassword")),);
const NewPasswordPage = Loadable(lazy(() => import("../pages/auth/NewPassword")),);
const VerifyOTPPage = Loadable(lazy(() => import("../pages/auth/Verify")),);
const Page404 = Loadable(lazy(() => import("../pages/Page404")));

