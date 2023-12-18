import { http } from "../http/http";

export const roadRepository = {
  getRoads: async () => {
    const roads = await http.get<any[]>("/road");
    return roads;
  },
  createNewRoad: async (newRoad: any) => {
    const response = await http.post("/road", JSON.stringify(newRoad));
    return response;
  },
};
