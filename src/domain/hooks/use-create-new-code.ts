import { useMutation } from "@tanstack/react-query";
import { codeService } from "../services/code.service";

export const useCreateNewCode = () => {
  return useMutation({
    mutationFn: (newCode: any) => {
      return codeService.createNewCode(newCode);
    },
  });
};
