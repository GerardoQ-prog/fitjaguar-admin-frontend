import { useMutation } from "@tanstack/react-query";
import { roadsService } from "../services/roads.service";

export const useCreateNewRoad = () => {
  return useMutation({
    mutationFn: (newRoad: any) => {
      return roadsService.createNewRoad(newRoad);
    },
  });
};
