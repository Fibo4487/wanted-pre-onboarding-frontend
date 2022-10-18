import { toast, ToastOptions } from "react-toastify";

export const validateLogin = (email: string, password: string) => {
  let isValid = false;
  const emailValid = email.includes("@");
  const passwordValid = password.length >= 8;

  if (emailValid && passwordValid) {
    isValid = true;
  }

  return isValid;
};
