import * as Api from "./Api";
import errorHandler from "./errorHandler";

interface AuthResponse {
  access_token: string;
}

interface IAuthApi {
  signIn: (email: string, password: string) => Promise<AuthResponse>;
  signUp: (email: string, password: string) => Promise<AuthResponse>;
}

export const AuthApi: IAuthApi = (() => {
  return {
    signIn: async (email: string, password: string) => {
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
    signUp: async (email: string, password: string) => {
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
