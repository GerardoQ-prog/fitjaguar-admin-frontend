import React from "react";
import CardsDocuments from "../components/containers/cards-documents";
import CardsVideos from "../components/containers/cards-videos";

const ResourcesPage = () => {
  return (
    <main>
      <div className="flex justify-between w-full items-center">
        <h1 className="text-white font-bold text-[40px] my-2">
          Recursos Gratuitos
        </h1>
      </div>
      <CardsDocuments />
      <CardsVideos />
    </main>
  );
};

export default ResourcesPage;
