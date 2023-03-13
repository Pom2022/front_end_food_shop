import { createContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

import * as authApi from "../apis/auth-api";
import {
  setAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authenticatedUser, setAuthenticatedUser] = useState(
    getAccessToken() ? true : null
  );

  useEffect(() => {
    const fetchAuthUser = async () => {
      try {
        const res = await authApi.getMe();

        setAuthenticatedUser(res.data.customer);
      } catch (err) {
        console.log(err);
        removeAccessToken();
      }
    };
    if (getAccessToken()) {
      fetchAuthUser();
    }
  }, []);

  // const login = async (emailOrMobile, password) => {
  //   const res = await authApi.login({ emailOrMobile, password });
  //   setAccessToken(res.data.accessToken);
  //   setAuthenticatedUser(true);
  // };

  const login = async (emailOrMobile, password) => {
    const res = await authApi.login({ emailOrMobile, password });
    //setAccessToken(res.data.accessToken);
    localStorage.setItem("ACESS_TOKEN", res.data.accessToken);
    // setAuthenticatedUser(jwtDecode(res.data.accessToken));
    setAuthenticatedUser(true);
  };

  const logout = () => {
    removeAccessToken();
    setAuthenticatedUser(null);
  };

  return (
    <AuthContext.Provider value={{ login, authenticatedUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
