import React from "react";
import styled from "styled-components";

const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <Container>
      <FormTitle>
        <h1>로그인</h1>
        <button>회원가입</button>
      </FormTitle>
      <InputContainer>
        <Input placeholder="이메일" value={email} onChange={onChangeEmail} />
        <Input
          placeholder="비밀번호"
          value={password}
          onChange={onChangePassword}
        />
      </InputContainer>
      <ButtonContainer>
        <Button>로그인</Button>
      </ButtonContainer>
    </Container>
  );
};

export default LoginForm;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: #f5f5f5;
  border-radius: 10px;
  border: 1px solid black;
  width: 400px;
  height: 300px;
  padding: 20px;
`;

const FormTitle = styled.div`
  margin-bottom: 20px;
  align-self: flex-start;
  display: flex;
  justify-content: space-between;
  width: 100%;
  h1 {
    font-size: 20px;
    font-weight: 600;
  }
  button {
    font-size: 14px;
    font-weight: 600;
    color: #1e90ff;
    background-color: transparent;
    border: none;
    outline: none;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  padding: 10px;
  font-size: 15px;
  margin-bottom: 15px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  padding: 10px;
  font-size: 15px;
  background-color: #e5e5e5;
`;
