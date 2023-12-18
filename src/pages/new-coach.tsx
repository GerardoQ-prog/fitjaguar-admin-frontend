import FormNewCoach from "../components/elements/form-new-coach";
import BackButton from "../components/ui/back-button";

const NewCoachPage = () => {
  return (
    <main>
      <BackButton to="/entrenadores" />
      <h1 className="text-white font-bold text-[40px] my-2">
        Nuevo Entrenador
      </h1>
      <FormNewCoach />
    </main>
  );
};

export default NewCoachPage;
