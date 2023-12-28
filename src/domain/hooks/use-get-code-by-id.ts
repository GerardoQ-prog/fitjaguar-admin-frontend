import { useQuery } from "@tanstack/react-query";
import { codeService } from "../services/code.service";

export const useGetCodeById = (id: string) => {
  return useQuery({
    queryKey: ["code-id", id],
    queryFn: () => codeService.getCodeById(id),
  });
};
