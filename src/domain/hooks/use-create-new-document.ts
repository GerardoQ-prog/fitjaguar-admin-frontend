import { useMutation } from "@tanstack/react-query";
import { resourcesService } from "../services/resources.service";

export const useCreateNewDocument = () => {
  return useMutation({
    mutationFn: (newDocument: any) => {
      const algo = resourcesService.createNewDocument(newDocument);
      console.log(algo);
      return algo;
    },
  });
};
