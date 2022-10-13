import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <h1>Login</h1>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f5f5f5;
  border-radius: 10px;
  border: 1px solid black;
  width: 400px;
  height: 400px;
`;
