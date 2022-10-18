import * as Api from "./Api";
import errorHandler from "./errorHandler";

export interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

interface ITodoApi {
  createTodo: (todo: string) => Promise<Todo>;
  getTodos: () => Promise<Todo[]>;
  updateTodo: (id: number, todo: string, isCompleted: boolean) => Promise<Todo>;
  deleteTodo: (id: number) => Promise<void>;
}

export const TodoApi: ITodoApi = (() => {
  return {
    createTodo: async (todo: string) => {
      try {
        const response = await Api.post("todos", { todo });
        return response.data;
      } catch (error: unknown) {
        throw errorHandler(error);
      }
    },
    getTodos: async () => {
      try {
        const response = await Api.get("todos");
        return response.data;
      } catch (error: unknown) {
        throw errorHandler(error);
      }
    },
    updateTodo: async (id: number, todo: string, isCompleted: boolean) => {
      try {
        const response = await Api.put(`todos/${id}`, { todo, isCompleted });
        return response.data;
      } catch (error: unknown) {
        throw errorHandler(error);
      }
    },
    deleteTodo: async (id: number) => {
      try {
        await Api.delete(`todos/${id}`);
      } catch (error: unknown) {
        throw errorHandler(error);
      }
    },
  };
})();
