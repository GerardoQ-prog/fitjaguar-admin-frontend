import { http } from "../http/http";

export const codeRepository = {
  getCodes: async () => {
    const coaches = await http.get<any[]>("/code");
    return coaches;
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
};
