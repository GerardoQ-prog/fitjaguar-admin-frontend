import { useMutation } from "@tanstack/react-query";
import { roadsService } from "../services/roads.service";

export const useUpdateRoad = () => {
  return useMutation({
    mutationFn: (road: any) => {
      return roadsService.updateRoad(road);
    },
  });
};
