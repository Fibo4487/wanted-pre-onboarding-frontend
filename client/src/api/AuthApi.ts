import * as Api from "./Api";
import errorHandler from "./errorHandler";

interface AuthResponse {
  access_token: string;
}

interface IAuthApi {
  login: (email: string, password: string) => Promise<AuthResponse>;
  register: (email: string, password: string) => Promise<AuthResponse>;
}

export const AuthApi: IAuthApi = (() => {
  return {
    login: async (email: string, password: string) => {
      try {
        const response = await Api.post("auth/signin", {
          email,
          password,
        });
        return response.data;
      } catch (error: unknown) {
        throw errorHandler(error);
      }
    },
    register: async (email: string, password: string) => {
      try {
        const response = await Api.post("auth/signup", {
          email,
          password,
        });
        return response.data;
      } catch (error: unknown) {
        throw errorHandler(error);
      }
    },
  };
})();
