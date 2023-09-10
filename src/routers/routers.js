import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Dictionary from "../pages/dictionary/Dictionary";
import HomePage from "../layouts/HomePage/HomePage";
import Vocabulary from "../pages/vocabulary/Vocabulary";
const routers = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "dictionary",
        element: <Dictionary />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "vocabulary",
        element: <Vocabulary />,
      },
    ],
  },
  // { path: "/Dictionary", element: <Dictionary /> },
]);

export default routers;
