import React from "react";
import BackButton from "../components/ui/back-button";
import FormNewDocument from "../components/elements/form-new-document";

const NewDocumentPage = () => {
  return (
    <main>
      <BackButton to="/recursos" />
      <h1 className="text-white font-bold text-[40px] my-2">Nuevo Documento</h1>
      <FormNewDocument />
    </main>
  );
};

export default NewDocumentPage;
