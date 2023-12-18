import { useQuery } from "@tanstack/react-query";
import { coachService } from "../services/coach.service";

export const useGetCoaches = () => {
  return useQuery({ queryKey: ["coaches"], queryFn: coachService.getCoaches });
};
