import { useMutation } from "@tanstack/react-query";
import { resourcesService } from "../services/resources.service";

export const useUpdateDocument = () => {
  return useMutation({
    mutationFn: (road: any) => {
      return resourcesService.updateDocument(road);
    },
  });
};
