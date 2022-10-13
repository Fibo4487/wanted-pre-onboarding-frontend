import React from "react";
import styled from "styled-components";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return <Container>{children}</Container>;
};

export default HomeLayout;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;
