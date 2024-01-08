import { http } from "../http/http";

export const coachRepository = {
  getCoaches: async () => {
    const coaches = await http.get<any[]>("/user");
    return coaches;
  },
  getCoachById: async (id: string) => {
    const coaches = await http.get<any[]>(`/user/${id}`);
    return coaches;
  },
  createNewCoach: async (newCoach: any) => {
    const response = await http.post("/user", JSON.stringify(newCoach));
    return response;
  },
  changeToCoach: async (id: string, newCoach: any) => {
    const response = await http.patch(`/user/${id}`, JSON.stringify(newCoach));
    return response;
  },
  updateCoach: async (newCoach: any) => {
    const { _id } = newCoach;
    delete newCoach._id;
    const coach = await http.patch(`/user/${_id}`, JSON.stringify(newCoach));
    return coach;
  },
};
