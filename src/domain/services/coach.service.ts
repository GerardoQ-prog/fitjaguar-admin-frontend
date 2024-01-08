import { coachRepository } from "../../infrastructure/repositories/coach.repository";
import env from "../../utils/env";

export const coachService = {
  getCoaches: async () => {
    const users = await coachRepository.getCoaches();
    const coaches = users.filter((item) => item.typeUser.name === env.COACH);
    return coaches;
  },
  getCoachById: async (id: string) => {
    const coach = await coachRepository.getCoachById(id);
    return coach;
  },
  createNewCoach: (newCoach: any) => {
    return coachRepository.createNewCoach(newCoach);
  },
  changeToCoach: (id: string, newCoach: any) => {
    return coachRepository.changeToCoach(id, newCoach);
  },
  updateCoach: async (newCoach: any) => {
    const coach = await coachRepository.updateCoach(newCoach);
    return coach;
  },
};
