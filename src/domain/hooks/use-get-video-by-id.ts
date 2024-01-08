import { useQuery } from "@tanstack/react-query";
import { resourcesService } from "../services/resources.service";

export const useGetVideoById = (id: string) => {
  return useQuery({
    queryKey: ["video-id", id],
    queryFn: () => resourcesService.getVideoById(id),
  });
};
