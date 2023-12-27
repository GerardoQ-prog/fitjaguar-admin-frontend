import { useQuery } from "@tanstack/react-query";
import { resourcesService } from "../services/resources.service";

export const useGetDocumentById = (id: string) => {
  return useQuery({
    queryKey: ["document-id", id],
    queryFn: () => resourcesService.getDocumentById(id),
  });
};
