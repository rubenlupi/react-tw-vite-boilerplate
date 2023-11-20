import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { browserRoutes } from "./providers/BrowserRoutes.tsx";
import { AuthProvider } from "./providers/AuthProvider.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={browserRoutes} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
