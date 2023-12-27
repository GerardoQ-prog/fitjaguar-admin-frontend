import { useQuery } from "@tanstack/react-query";
import { roadsService } from "../services/roads.service";

export const useGetRoadBySlug = (slug: string) => {
  return useQuery({
    queryKey: ["road-slug", slug],
    queryFn: () => roadsService.getRoadBySlug(slug),
  });
};
