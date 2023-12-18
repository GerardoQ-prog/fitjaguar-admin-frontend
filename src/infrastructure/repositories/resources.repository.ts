import { http } from "../http/http";

export const resourcesRepository = {
  getVideos: async () => {
    const coaches = await http.get<any[]>("/video");
    return coaches;
  },
  createNewVideo: async (newVideo: any) => {
    const response = await http.post("/video", JSON.stringify(newVideo));
    return response;
  },
  getDocuments: async () => {
    const coaches = await http.get<any[]>("/document-file");
    return coaches;
  },
  createNewDocument: async (newDocument: any) => {
    const response = await http.post(
      "/document-file",
      JSON.stringify(newDocument)
    );
    return response;
  },
};
