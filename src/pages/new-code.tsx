import React from "react";
import BackButton from "../components/ui/back-button";
import FormNewCode from "../components/elements/form-new-code";

const NewActivationCodePage = () => {
  return (
    <main>
      <BackButton to="/codigo-activacion" />
      <h1 className="text-white font-bold text-[40px] my-2">
        Nuevo Código de Activación
      </h1>
      <FormNewCode />
    </main>
  );
};

export default NewActivationCodePage;
