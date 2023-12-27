import { resourcesService } from "./../services/resources.service";
import { useMutation } from "@tanstack/react-query";

export const useDeleteDocument = () => {
  return useMutation({
    mutationFn: (documentId: any) => {
      return resourcesService.deleteDocument(documentId);
    },
  });
};
