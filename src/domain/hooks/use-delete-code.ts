import { useMutation } from "@tanstack/react-query";
import { codeService } from "../services/code.service";

export const useDeleteCode = () => {
  return useMutation({
    mutationFn: (codeId: any) => {
      return codeService.deleteCode(codeId);
    },
  });
};
