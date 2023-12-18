import { http } from "../http/http";

export const coachRepository = {
  getCoaches: async () => {
    const coaches = await http.get<any[]>("/coach");
    return coaches;
  },
  createNewCoach: async (newCoach: any) => {
    const response = await http.post("/coach", JSON.stringify(newCoach));
    return response;
  },
};
