import { createContext, useState, ReactNode } from "react";

// Definir el tipo para el usuario
type UserType = {
  name: string;
} | null;

// Definir el tipo para el contexto
type AuthContextType = {
  user: UserType;
  login: (newUser: UserType) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType>(null);

  const login = (newUser: UserType) => {
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
