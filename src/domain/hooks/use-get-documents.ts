import { useQuery } from "@tanstack/react-query";
import { resourcesService } from "../services/resources.service";

export const useGetDocuments = () => {
  return useQuery({
    queryKey: ["documents"],
    queryFn: resourcesService.getDocuments,
  });
};
