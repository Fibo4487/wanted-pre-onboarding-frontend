import * as Api from "./Api";

interface AuthResponse {
  data: {
    access_token: string;
  };
}

interface IAuthApi {
  login: (email: string, password: string) => Promise<AuthResponse>;
  register: (email: string, password: string) => Promise<AuthResponse>;
}

export const AuthApi: IAuthApi = (() => {
  return {
    login: async (email: string, password: string) => {
      const response = await Api.post("auth/login", {
        email,
        password,
      });
      return response.data;
    },
    register: async (email: string, password: string) => {
      const response = await Api.post("auth/register", {
        email,
        password,
      });
      return response.data;
    },
  };
})();
