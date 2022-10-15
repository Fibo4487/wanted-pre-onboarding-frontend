import React from "react";
import { toast, ToastOptions } from "react-toastify";
import styled from "styled-components";

const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoginForm, setIsLoginForm] = React.useState(true);

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onClickToggle = () => {
    setIsLoginForm(!isLoginForm);
  };

  const validate = React.useCallback(() => {
    let isValid = false;
    const emailValid = email.includes("@");
    const passwordValid = password.length >= 8;
    const toastOptions: ToastOptions = {
      position: "top-center",
      autoClose: 2000,
    };
    if (!email || !password) {
      toast.error("로그인과 비밀번호를 모두 입력해주세요.", toastOptions);
    } else {
      if (!emailValid) {
        toast.error("이메일 형식이 올바르지 않습니다.", toastOptions);
      }
      if (!passwordValid) {
        toast.error("비밀번호는 8자 이상이어야 합니다.", toastOptions);
      }
    }

    if (emailValid && passwordValid) {
      isValid = true;
    }

    return isValid;
  }, [email, password]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      toast.success("로그인 성공");
    } else {
      return;
    }
  };

  return (
    <Container>
      <Title>
        {isLoginForm ? (
          <>
            <h1>Login</h1>
            <button onClick={onClickToggle}>Register</button>
          </>
        ) : (
          <>
            <h1>Register</h1>
            <button onClick={onClickToggle}>Login</button>
          </>
        )}
      </Title>
      <Form onSubmit={onSubmit}>
        <InputContainer>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={onChangeEmail}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={onChangePassword}
          />
        </InputContainer>
        <Submit type="submit">{isLoginForm ? "Login" : "Register"}</Submit>
      </Form>
    </Container>
  );
};

export default LoginForm;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f5f5f5;
  border-radius: 10px;
  border: 1px solid black;
  width: 400px;
  height: 300px;
  padding: 20px;
`;

const Title = styled.div`
  margin-bottom: 20px;
  align-self: flex-start;
  display: flex;
  justify-content: space-between;
  width: 100%;
  h1 {
    font-size: 20px;
    font-weight: 600;
  }
  p {
    font-size: 12px;
    color: #999;
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 30px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  padding: 10px;
  font-size: 15px;
  margin-bottom: 10px;
`;

const Submit = styled.button`
  width: 100%;
  height: 40px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  padding: 10px;
  font-size: 15px;
  background-color: #e5e5e5;
`;
