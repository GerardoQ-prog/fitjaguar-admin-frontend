import { useQuery } from "@tanstack/react-query";
import { usersService } from "../services/users.service";

export const useGetUsers = () => {
  return useQuery({ queryKey: ["users"], queryFn: usersService.getUsers });
};
