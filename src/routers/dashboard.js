import {
  FolderOutlined,
  InboxOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";

const dashboardLink = [
  {
    path: "/profile",
    label: "Profile",
    icon: <UserOutlined />,
  },
  {
    path: "/leitner",
    label: "Leitner",
    icon: <FolderOutlined />,
  },
  {
    path: "/wordLists",
    label: "My Word Lists",
    icon: <InboxOutlined />,
  },
  {
    // path: "",
    label: "Sign Out",
    icon: <LogoutOutlined />,
  },
];
export default dashboardLink;
