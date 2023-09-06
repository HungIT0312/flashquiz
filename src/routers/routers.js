import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default routers;
