import { roadRepository } from "../../infrastructure/repositories/roads.repository";

export const roadsService = {
  getRoads: () => {
    return roadRepository.getRoads();
  },
  getRoadBySlug: (slug: string) => {
    return roadRepository.getRoadBySlug(slug);
  },
  createNewRoad: (newRoad: any) => {
    const response = roadRepository.createNewRoad(newRoad);
    return response;
  },
  updateRoad: (road: any) => {
    const response = roadRepository.updateRoad(road);
    return response;
  },
  deleteRoad: (roadId: string) => {
    const response = roadRepository.deleteRoad(roadId);
    return response;
  },
};
