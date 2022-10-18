import React from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { useAuthContext } from "../../store/AuthProvider";
import { AuthApi } from "../../api/AuthApi";
import { validateLogin } from "../../utils/validateLogin";
import { useNavigate } from "react-router-dom";
import errorHandler from "../../api/errorHandler";

const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoginForm, setIsLoginForm] = React.useState(true);

  const { setAuthToken } = useAuthContext();
  const navigate = useNavigate();

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleClickToggle = () => {
    setIsLoginForm(!isLoginForm);
  };

  const validate = React.useCallback(validateLogin, [email, password]);

  const handleLogin = () => {
    if (!validate(email, password)) {
      return;
    }
    setAuthToken(email, password);
    navigate("/todo");
  };

  const handleRegister = async () => {
    if (validate(email, password)) {
      try {
        await AuthApi.signUp(email, password);
        toast.success("회원가입에 성공했습니다.", {
          position: "top-center",
          autoClose: 2000,
        });
        setIsLoginForm(true);
      } catch (error) {
        console.log(errorHandler(error));
      }
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoginForm) {
      handleLogin();
    } else {
      handleRegister();
    }
  };

  return (
    <Container>
      <Title>
        {isLoginForm ? (
          <>
            <h1>Login</h1>
            <button onClick={handleClickToggle}>Register</button>
          </>
        ) : (
          <>
            <h1>Register</h1>
            <button onClick={handleClickToggle}>Login</button>
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
