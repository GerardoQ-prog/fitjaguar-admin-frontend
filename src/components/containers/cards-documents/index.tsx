import { useEffect, useState } from "react";
import Button from "../../ui/button";
import { Link } from "react-router-dom";
import { resourcesService } from "../../../domain/services/resources.service";
import CardDocument from "../../elements/card-document";
import { useGetDocuments } from "../../../domain/hooks/use-get-documents";
import SkeletonCardDocument from "../../elements/card-document/skeleton";

const CardsDocuments = () => {
  const [documents, setDocuments] = useState<any[]>([]);

  const { data, isLoading, isFetching } = useGetDocuments();

  useEffect(() => {
    data && setDocuments(data);
  }, [data]);

  return (
    <div>
      <div className="flex justify-between w-full items-center">
        <h2 className="text-white font-bold text-[30px] my-2">Documentos</h2>
        <Link to="/nuevo-documento">
          <Button>Nuevo Documento</Button>
        </Link>
      </div>
      <div className="flex w-full gap-5 flex-wrap">
        {documents.map((item: any, index) => (
          <CardDocument key={index} {...item} />
        ))}
        {(isLoading || isFetching) &&
          [1, 2, 3, 4, 5].map(() => <SkeletonCardDocument />)}
      </div>
    </div>
  );
};

export default CardsDocuments;
