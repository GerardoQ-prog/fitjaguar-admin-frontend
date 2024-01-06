import { useState, useEffect } from "react";
import CardCoach from "../../elements/card-coach";
import { useGetCoaches } from "../../../domain/hooks/use-get-coaches";
import SkeletonCardCoach from "../../elements/card-coach/skeleton";

const CardsCoaches = () => {
  const [coaches, setCoaches] = useState<any[]>([]);

  const { data, isLoading, isFetching } = useGetCoaches();

  useEffect(() => {
    data && setCoaches(data);
  }, [data]);

  return (
    <div className="flex w-full gap-x-5 gap-y-4 flex-wrap">
      {coaches?.map((item: any, index: number) => (
        <CardCoach key={index} {...item} />
      ))}
      {(isLoading || isFetching) &&
        [1, 2, 3, 4, 5].map(() => <SkeletonCardCoach />)}
    </div>
  );
};

export default CardsCoaches;
