import { resourcesRepository } from "../../infrastructure/repositories/resources.repository";

export const resourcesService = {
  getVideos: () => {
    return resourcesRepository.getVideos();
  },
  getVideoById: (id: string) => {
    return resourcesRepository.getVideoById(id);
  },
  createNewVideo: (newVideo: any) => {
    const response = resourcesRepository.createNewVideo(newVideo);
    console.log("response", response);
    return response;
  },
  updateVideo: (newVideo: any) => {
    const response = resourcesRepository.updateVideo(newVideo);
    return response;
  },
  deleteVideo: (id: string) => {
    const response = resourcesRepository.deleteVideo(id);
    return response;
  },
  getDocuments: () => {
    return resourcesRepository.getDocuments();
  },
  getDocumentById: (id: string) => {
    return resourcesRepository.getDocumentById(id);
  },
  createNewDocument: (newDocument: any) => {
    const response = resourcesRepository.createNewDocument(newDocument);
    console.log("response", response);
    return response;
  },
  updateDocument: (newDocument: any) => {
    const response = resourcesRepository.updateDocument(newDocument);
    return response;
  },
  deleteDocument: (id: string) => {
    const response = resourcesRepository.deleteDocument(id);
    return response;
  },
};
