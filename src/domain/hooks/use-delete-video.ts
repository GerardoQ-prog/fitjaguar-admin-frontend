import { resourcesService } from "./../services/resources.service";
import { useMutation } from "@tanstack/react-query";

export const useDeleteVideo = () => {
  return useMutation({
    mutationFn: (videoId: any) => {
      return resourcesService.deleteVideo(videoId);
    },
  });
};
