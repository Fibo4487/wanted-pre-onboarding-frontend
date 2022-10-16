import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthApi } from "../api/AuthApi";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { validateLogin } from "../utils/validateLogin";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextProps {
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  token: null,
  login: async () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useLocalStorage<string | null>(
    "access_token",
    null
  );
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    if (!validateLogin(email, password)) {
      return;
    }
    try {
      const { data } = await AuthApi.login(email, password);
      setToken(data.access_token);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    setToken(null);
    navigate("/");
  };

  const value = {
    token,
    login,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
