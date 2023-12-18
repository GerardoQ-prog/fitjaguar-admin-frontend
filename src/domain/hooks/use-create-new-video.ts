import { useMutation } from "@tanstack/react-query";
import { resourcesService } from "../services/resources.service";

export const useCreateNewVideo = () => {
  return useMutation({
    mutationFn: (newVideo: any) => {
      return resourcesService.createNewVideo(newVideo);
    },
  });
};
