import { useMutation } from "@tanstack/react-query";
import { codeService } from "../services/code.service";

export const useUpdateCode = () => {
  return useMutation({
    mutationFn: (code: any) => {
      return codeService.updateCode(code);
    },
  });
};
