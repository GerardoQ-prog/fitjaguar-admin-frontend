import { usersRepository } from "../../infrastructure/repositories/users.repository";
import env from "../../utils/env";

export const usersService = {
  getUsers: async () => {
    const users = await usersRepository.getUsers();
    const coaches = users.filter((item) => item.typeUser.name === env.STUDENT);
    return coaches;
  },
  getUserById: async (id: string) => {
    const coach = await usersRepository.getUserById(id);
    return coach;
  },
  getUserbyEmail: (email: string) => {
    return usersRepository.getUserByEmail(email);
  },
  createNewUser: (newUser: any) => {
    return usersRepository.createNewUser(newUser);
  },
  updateUser: async (newUser: any) => {
    const coach = await usersRepository.updateUser(newUser);
    return coach;
  },
  deleteUser: (userId: string) => {
    const response = usersRepository.deleteUser(userId);
    return response;
  },
};
