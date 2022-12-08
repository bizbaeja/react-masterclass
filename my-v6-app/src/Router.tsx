import { createBrowserRouter, Routes, Route } from "react-router-dom";
import About from "./screens/About";
import Home from "./screens/Home";
import Root from "./Root";
import NotFound from "./screens/NotFound";
import ErrorComponent from "./screens/ErrorComponent";
import User from "./screens/users/User";
import Followers from "./screens/users/Followers";
//전체 라우터들의 컨테이너

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      { path: "", element: <Home />, errorElement: <ErrorComponent /> },
      { path: "about", element: <About /> },
      {
        path: "users/:userId",
        element: <User />,
        children: [{ path: "followers", element: <Followers /> }],
      },
      { path: "users" },
    ],
    errorElement: <NotFound />,
  },
]);
export default router;
