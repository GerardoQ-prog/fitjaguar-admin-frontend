import React from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/ui/back-button";
import FormNewVideo from "../components/elements/form-new-video";
import { useGetVideoById } from "../domain/hooks/use-get-video-by-id";

const VideoIdPage = () => {
  const { id } = useParams();

  const { data } = useGetVideoById(id as string);

  return (
    <main>
      <BackButton to="/recursos" />
      <h1 className="text-white font-bold text-[40px] my-2">
        Información de documento
      </h1>
      {data && <FormNewVideo data={data} />}
    </main>
  );
};

export default VideoIdPage;
