import React from "react";
import styled from "styled-components";

interface TodoLayoutProps {
  children: React.ReactNode;
}

const TodoLayout = ({ children }: TodoLayoutProps) => {
  return <Container>{children}</Container>;
};

export default TodoLayout;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;
