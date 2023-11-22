import { Navigate, createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "@/pages/GenericError/GenericErrorPage";
import { OutletRoot } from "@/pages/OutletRoot/OutletRoot";

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
          import("@/components/containers/CurrenciesTable/CurrenciesTable"),
      },
      {
        path: "/home",
        errorElement: <ErrorPage />,
        lazy: () => import("@/pages/Home/HomePage"),
      },
      {
        path: "/common-hooks",
        errorElement: <ErrorPage />,
        element: <OutletRoot />,
        children: [
          {
            path: "/common-hooks",
            errorElement: <ErrorPage />,
            lazy: () => import("@/pages/CommonHooks/CommonHooksPage"),
          },
          {
            path: "/common-hooks/use-state-in-url",
            errorElement: <ErrorPage />,
            lazy: () => import("@/pages/useStateInUrl/useStateInUrlPage"),
          },
        ],
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
