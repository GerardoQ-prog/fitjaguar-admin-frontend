import { useMutation } from "@tanstack/react-query";
import { usersService } from "../services/users.service";

export const useCreateNewUser = () => {
  return useMutation({
    mutationFn: (newUser: any) => {
      return usersService.createNewUser(newUser);
    },
  });
};
