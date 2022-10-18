import React from "react";
import styled from "styled-components";

import { useAuthContext } from "../../store/AuthProvider";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { token, deleteAuthToken } = useAuthContext();
  const navigate = useNavigate();
  const handleLogout = () => {
    deleteAuthToken();
    navigate("/");
  };

  return (
    <HeaderWrapper>
      <HeaderTitle>Todo App</HeaderTitle>
      {token && <LogoutButton onClick={handleLogout}>Logout</LogoutButton>}
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #f5f5f5;
  border-bottom: 1px solid black;
  padding: 0 100px;
`;

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  color: #333;
`;

const LogoutButton = styled.button`
  background-color: #f5f5f5;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  outline: none;
`;
