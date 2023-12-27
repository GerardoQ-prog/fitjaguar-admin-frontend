import { http } from "../http/http";

export const roadRepository = {
  getRoads: async () => {
    const roads = await http.get<any[]>("/road");
    return roads;
  },
  getRoadBySlug: async (slug: string) => {
    const roads = await http.get<any[]>(`/road/${slug}`);
    return roads;
  },
  createNewRoad: async (newRoad: any) => {
    const response = await http.post("/road", JSON.stringify(newRoad));
    return response;
  },
  updateRoad: async (road: any) => {
    const { _id } = road;
    delete road._id;
    const response = await http.put(`/road/${_id}`, JSON.stringify(road));
    return response;
  },
  deleteRoad: async (roadId: string) => {
    const response = await http.delete(`/road/${roadId}`);
    return response;
  },
};
