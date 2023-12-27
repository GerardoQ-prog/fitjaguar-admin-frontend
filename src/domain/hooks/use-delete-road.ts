import { useMutation } from "@tanstack/react-query";
import { roadsService } from "../services/roads.service";

export const useDeleteRoad = () => {
  return useMutation({
    mutationFn: (roadId: any) => {
      return roadsService.deleteRoad(roadId);
    },
  });
};
