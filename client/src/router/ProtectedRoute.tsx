import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthContext } from "../store/AuthProvider";

interface ProtectedRouteProps {
  children?: React.ReactNode;
  isLogin: boolean;
}

const ProtectedRoute = ({ children, isLogin }: ProtectedRouteProps) => {
  const { token } = useAuthContext();
  const needToLoginToast = () => {
    toast.error("로그인이 필요합니다.", {
      position: "top-center",
      autoClose: 2000,
    });
  };
  if (isLogin) {
    if (token) {
      return <Navigate to="/todo" />;
    }
    return <Outlet />;
  } else {
    if (token) {
      return <Outlet />;
    }
    needToLoginToast();
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;
