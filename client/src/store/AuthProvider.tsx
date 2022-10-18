import { createContext, useContext } from "react";
import { AuthApi } from "../api/AuthApi";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { validateLogin } from "../utils/validateLogin";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextProps {
  token: string | null;
  setAuthToken: (token: string) => void;
  deleteAuthToken: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  token: null,
  setAuthToken: async () => {},
  deleteAuthToken: () => {},
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useLocalStorage<string | null>(
    "access_token",
    null
  );

  const setAuthToken = async (token: string) => {
    setToken(token);
  };

  const deleteAuthToken = () => {
    setToken(null);
  };

  const value = {
    token,
    setAuthToken,
    deleteAuthToken,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
