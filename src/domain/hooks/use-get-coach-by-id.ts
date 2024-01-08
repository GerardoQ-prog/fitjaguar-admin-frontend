import { useQuery } from "@tanstack/react-query";
import { coachService } from "../services/coach.service";

export const useGetCoachById = (id: string) => {
  return useQuery({
    queryKey: ["coach-id", id],
    queryFn: () => coachService.getCoachById(id),
  });
};
