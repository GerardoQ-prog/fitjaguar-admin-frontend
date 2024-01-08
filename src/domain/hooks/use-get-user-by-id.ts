import { useQuery } from "@tanstack/react-query";
import { usersService } from "../services/users.service";

export const useGetUserById = (id: string) => {
  return useQuery({
    queryKey: ["user-id", id],
    queryFn: () => usersService.getUserById(id),
  });
};
