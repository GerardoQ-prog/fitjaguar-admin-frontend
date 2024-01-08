import { useMutation } from "@tanstack/react-query";
import { coachService } from "../services/coach.service";
import env from "../../utils/env";

export const useChangeToCoach = () => {
  return useMutation({
    mutationFn: (id: string) => {
      return coachService.changeToCoach(id, {
        typeUser: env.COACH_ID,
      });
    },
  });
};
