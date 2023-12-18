import { useEffect, useState } from "react";
import { useGetVideos } from "../../../domain/hooks/use-get-videos";
import Button from "../../ui/button";
import { Link } from "react-router-dom";
import SkeletonCardDocument from "../../elements/card-document/skeleton";
import CardVideo from "../../elements/card-video";

const CardsVideos = () => {
  const [videos, setVideos] = useState<any[]>([]);

  const { data, isLoading } = useGetVideos();

  useEffect(() => {
    data && setVideos(data);
  }, [data]);

  return (
    <div>
      <div className="flex justify-between w-full items-center">
        <h2 className="text-white font-bold text-[30px] my-2">Videos</h2>
        <Link to="/nuevo-video">
          <Button>Nuevo Video</Button>
        </Link>
      </div>
      <div className="flex w-full gap-5 flex-wrap">
        {isLoading && [1, 2, 3, 4, 5].map(() => <SkeletonCardDocument />)}

        {videos.map((item: any, index) => (
          <CardVideo key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CardsVideos;
