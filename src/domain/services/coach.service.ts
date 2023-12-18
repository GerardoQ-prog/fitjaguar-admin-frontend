import { coachRepository } from "../../infrastructure/repositories/coach.repository";

export const coachService = {
  getCoaches: () => {
    return coachRepository.getCoaches();
  },
  createNewCoach: (newCoach: any) => {
    const response = coachRepository.createNewCoach(newCoach);
    return response;
  },
};
