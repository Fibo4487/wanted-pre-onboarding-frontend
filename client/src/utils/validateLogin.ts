import { toast, ToastOptions } from "react-toastify";

export const validateLogin = (email: string, password: string) => {
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
};
