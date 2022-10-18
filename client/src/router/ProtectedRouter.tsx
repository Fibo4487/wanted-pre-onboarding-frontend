import React from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthContext } from "../store/AuthProvider";

interface ProtectedRouterProps {
  children: React.ReactNode;
}

const ProtectedRouter = ({ children }: ProtectedRouterProps) => {
  const { token } = useAuthContext();
  const needToLoginToast = () => {
    toast.error("로그인이 필요합니다.", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  if (!token) {
    needToLoginToast();
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default ProtectedRouter;
