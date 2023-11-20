import { createBrowserRouter, Navigate } from "react-router-dom";
import { ErrorPage } from "../pages/GenericError/GenericErrorPage";

export const browserRoutes = createBrowserRouter([
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
    element: <Navigate to="/home" replace />,
  },
]);
