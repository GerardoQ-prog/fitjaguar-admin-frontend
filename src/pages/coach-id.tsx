import React from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/ui/back-button";
import { useGetCoachById } from "../domain/hooks/use-get-coach-by-id";
import FormNewCoach from "../components/elements/form-new-coach";

const CoachIdPage = () => {
  const { id } = useParams();

  const { data } = useGetCoachById(id as string);

  return (
    <main>
      <BackButton to="/entrenadores" />
      <h1 className="text-white font-bold text-[40px] my-2">
        Información de entrenador
      </h1>
      {data && <FormNewCoach data={data} />}
    </main>
  );
};

export default CoachIdPage;
