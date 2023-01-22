import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");

  const login = (token) => {
    setIsAuth(true);
    setToken(token);
  };
  console.log("token:", token);

  const logout = () => {
    setIsAuth(false);
    token("");
  };

  return (
    <AuthContext.Provider value={{ login, logout, isAuth, token }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
