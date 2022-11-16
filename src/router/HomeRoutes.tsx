import { Home } from "../components/pages/Home";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

export const homeRoutes = [
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/home/setting",
    element: <Setting />,
  },
  {
    path: "/home/user_management",
    element: <UserManagement />,
  },
];