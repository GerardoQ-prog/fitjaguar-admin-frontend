import React from "react";
import BackButton from "../components/ui/back-button";
import FormNewUser from "../components/elements/form-new-user";

const NewUserPage = () => {
  return (
    <main>
      <BackButton to="/estudiantes" />
      <h1 className="text-white font-bold text-[40px] my-2">
        Nuevo Estudiante
      </h1>
      <FormNewUser />
    </main>
  );
};

export default NewUserPage;
