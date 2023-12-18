import { useQuery } from "@tanstack/react-query";
import { roadsService } from "../services/roads.service";

export const useGetRoads = () => {
  return useQuery({ queryKey: ["roads"], queryFn: roadsService.getRoads });
};
