import { useMutation } from "@tanstack/react-query";
import { coachService } from "../services/coach.service";

export const useUpdateCoach = () => {
  return useMutation({
    mutationFn: (coach: any) => {
      return coachService.updateCoach(coach);
    },
  });
};
