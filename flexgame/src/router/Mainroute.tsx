import { createBrowserRouter } from "react-router-dom";
import MainLayut from "../layout/MainLayut";
import Screen from "../pages/Screen";

export const Mainroute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayut />,
    children: [
      {
        index: true,
        element: <Screen />,
      },
    ],
  },
]);
