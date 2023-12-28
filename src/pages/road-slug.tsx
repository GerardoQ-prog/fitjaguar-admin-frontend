import React from "react";
import { useParams } from "react-router-dom";
import { useGetRoadBySlug } from "../domain/hooks/use-get-road-by-slug";
import FormNewRoad from "../components/elements/form-new-road";
import BackButton from "../components/ui/back-button";

const RoadSlugPage = () => {
  let { slug } = useParams();

  const { data } = useGetRoadBySlug(slug as string);

  return (
    <main>
      <BackButton to="/rutas" />
      <h1 className="text-white font-bold text-[40px] my-2">
        Información de Ruta
      </h1>
      {data && <FormNewRoad data={data} />}
    </main>
  );
};

export default RoadSlugPage;
