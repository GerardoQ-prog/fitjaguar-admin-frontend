import { useQuery } from "@tanstack/react-query";
import { usersService } from "../services/users.service";

export const useGetUserByEmail = ({ email }: { email: string }) => {
  return useQuery({
    queryKey: ["user-by-email"],
    queryFn: () => usersService.getUserbyEmail(email),
    enabled: false,
  });
};
