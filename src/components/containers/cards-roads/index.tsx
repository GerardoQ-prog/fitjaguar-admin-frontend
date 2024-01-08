import { useState, useEffect } from "react";
import CardCoach from "../../elements/card-coach";
import { useGetRoads } from "../../../domain/hooks/use-get-roads";
import SkeletonCardRoad from "../../elements/card-road/skeleton";
import CardRoad from "../../elements/card-road";

const CardsRoads = () => {
  const [roads, setRoads] = useState<any[]>([]);

  const { data, isLoading, isFetching } = useGetRoads();

  useEffect(() => {
    data && setRoads(data);
  }, [data]);

  return (
    <div className="flex w-full gap-x-5 gap-y-4 flex-wrap">
      {roads?.map((item: any, index: number) => (
        <CardRoad key={index} {...item} />
      ))}
      {(isLoading || isFetching) &&
        [1, 2, 3, 4, 5].map(() => <SkeletonCardRoad />)}
    </div>
  );
};

export default CardsRoads;
