import { useMutation } from "@tanstack/react-query";
import { resourcesService } from "../services/resources.service";

export const useUpdateVideo = () => {
  return useMutation({
    mutationFn: (video: any) => {
      return resourcesService.updateVideo(video);
    },
  });
};
