import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Dictionary from "../pages/dictionary/Dictionary";
const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/Dictionary", element: <Dictionary /> },
]);

export default routers;
