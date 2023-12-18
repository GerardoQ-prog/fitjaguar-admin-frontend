import { http } from "../http/http";

export const usersRepository = {
  getUsers: async () => {
    const roads = await http.get<any[]>("/user");
    return roads;
  },
  getUserByEmail: async (email: string) => {
    const roads = await http.get<any[]>(`/user?email=${email}`);
    return roads;
  },
  createNewUser: async (newRoad: any) => {
    const response = await http.post("/user", JSON.stringify(newRoad));
    return response;
  },
};
