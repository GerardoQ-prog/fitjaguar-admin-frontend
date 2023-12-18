import { roadRepository } from "../../infrastructure/repositories/roads.repository";

export const roadsService = {
  getRoads: () => {
    return roadRepository.getRoads();
  },
  createNewRoad: (newRoad: any) => {
    const response = roadRepository.createNewRoad(newRoad);
    return response;
  },
};
