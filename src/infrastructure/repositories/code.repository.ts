import { http } from "../http/http";

export const codeRepository = {
  getCodes: async () => {
    const coaches = await http.get<any[]>("/code");
    return coaches;
  },
  getRoadById: async (id: string) => {
    const roads = await http.get<any[]>(`/code/${id}`);
    return roads;
  },
  createNewCode: async (newCode: any) => {
    const response = await http.post("/code", JSON.stringify(newCode));
    return response;
  },
  updateCode: async (newCode: any) => {
    const { _id } = newCode;
    delete newCode._id;
    const response = await http.put(`/code/${_id}`, JSON.stringify(newCode));
    return response;
  },
  deleteCode: async (codeId: string) => {
    const response = await http.delete(`/code/${codeId}`);
    return response;
  },
};
