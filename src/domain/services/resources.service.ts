import { resourcesRepository } from "../../infrastructure/repositories/resources.repository";

export const resourcesService = {
  getVideos: () => {
    return resourcesRepository.getVideos();
  },
  createNewVideo: (newVideo: any) => {
    const response = resourcesRepository.createNewVideo(newVideo);
    return response;
  },
  getDocuments: () => {
    return resourcesRepository.getDocuments();
  },
  createNewDocument: (newDocument: any) => {
    const response = resourcesRepository.createNewDocument(newDocument);
    return response;
  },
};
