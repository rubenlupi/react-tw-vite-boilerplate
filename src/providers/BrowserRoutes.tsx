import { Navigate, createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../pages/GenericError/GenericErrorPage";
import { OutletRoot } from "../pages/OutletRoot/OutletRoot";

export const browserRoutes = createBrowserRouter([
  {
    path: "/",
    element: <OutletRoot />,
    children: [
      {
        path: "/login",
        errorElement: <ErrorPage />,
        lazy: () => import("../pages/Login/LoginFormPage"),
      },
      {
        path: "/currencies",
        errorElement: <ErrorPage />,
        lazy: () =>
          import("../components/containers/CurrenciesTable/CurrenciesTable"),
      },
      {
        path: "/home",
        errorElement: <ErrorPage />,
        lazy: () => import("../pages/Home/HomePage"),
      },
      {
        path: "/",
        errorElement: <ErrorPage />,
        element: <Navigate to="/login" />,
      },
      {
        path: "*",
        errorElement: <ErrorPage />,
        element: <Navigate to="/login" />,
      },
    ],
  },
]);
