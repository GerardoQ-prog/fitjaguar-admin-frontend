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
  updateVideo: async (newVideo: any) => {
    const { _id } = newVideo;
    delete newVideo._id;
    const response = await http.put(`/video/${_id}`, JSON.stringify(newVideo));
    return response;
  },
  deleteVideo: async (id: String) => {
    const response = await http.delete(`/video/${id}`);
    return response;
  },
  getDocuments: async () => {
    const coaches = await http.get<any[]>("/document-file");
    return coaches;
  },
  getDocumentById: async (id: String) => {
    const coaches = await http.get<any[]>(`/document-file/${id}`);
    return coaches;
  },
  createNewDocument: async (newDocument: any) => {
    const response = await http.post(
      "/document-file",
      JSON.stringify(newDocument)
    );
    return response;
  },
  updateDocument: async (newDocument: any) => {
    const { _id } = newDocument;
    delete newDocument._id;
    const response = await http.put(
      `/document-file/${_id}`,
      JSON.stringify(newDocument)
    );
    console.log(response);
    return response;
  },
  deleteDocument: async (id: String) => {
    const response = await http.delete(`/document-file/${id}`);
    return response;
  },
};
