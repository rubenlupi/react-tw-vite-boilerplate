import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth/useAuth";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
