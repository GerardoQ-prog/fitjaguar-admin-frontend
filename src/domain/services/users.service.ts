import { usersRepository } from "../../infrastructure/repositories/users.repository";

export const usersService = {
  getUsers: () => {
    return usersRepository.getUsers();
  },
  getUserbyEmail: (email: string) => {
    return usersRepository.getUserByEmail(email);
  },
  createNewUser: (newUser: any) => {
    const response = usersRepository.createNewUser(newUser);
    return response;
  },
};
