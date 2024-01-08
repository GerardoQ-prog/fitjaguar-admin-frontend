import { http } from "../http/http";

export const usersRepository = {
  getUsers: async () => {
    const roads = await http.get<any[]>("/user");
    return roads;
  },
  getUserById: async (id: string) => {
    const coaches = await http.get<any[]>(`/user/${id}`);
    return coaches;
  },
  getUserByEmail: async (email: string) => {
    const roads = await http.get<any[]>(`/user?email=${email}`);
    return roads;
  },
  createNewUser: async (newRoad: any) => {
    const response = await http.post("/user", JSON.stringify(newRoad));
    return response;
  },
  updateUser: async (newUser: any) => {
    const { _id } = newUser;
    delete newUser._id;
    const coach = await http.patch(`/user/${_id}`, newUser);
    return coach;
  },
  deleteUser: async (userId: string) => {
    const response = await http.delete(`/user/${userId}`);
    return response;
  },
};
