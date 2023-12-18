import { useMutation } from "@tanstack/react-query";
import { coachService } from "../services/coach.service";

export const useCreateNewCoach = () => {
  return useMutation({
    mutationFn: (newCoach: any) => {
      return coachService.createNewCoach(newCoach);
    },
  });
};
