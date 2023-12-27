import React from "react";
import { useParams } from "react-router-dom";
import { useGetDocumentById } from "../domain/hooks/use-get-document-by-id";
import FormNewDocument from "../components/elements/form-new-document";
import BackButton from "../components/ui/back-button";

const DocumentIdPage = () => {
  const { id } = useParams();

  const { data } = useGetDocumentById(id as string);

  return (
    <main>
      <BackButton to="/recursos" />
      <h1 className="text-white font-bold text-[40px] my-2">
        Información de documento
      </h1>
      {data && <FormNewDocument data={data} />}
    </main>
  );
};

export default DocumentIdPage;
