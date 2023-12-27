import { useQuery } from "@tanstack/react-query";
import { codeService } from "../services/code.service";

export const useGetCodes = () => {
  return useQuery({ queryKey: ["codes"], queryFn: codeService.getCodes });
};
