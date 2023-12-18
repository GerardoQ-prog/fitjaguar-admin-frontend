import FormNewRoad from "../components/elements/form-new-road";
import BackButton from "../components/ui/back-button";

const NewRoadPage = () => {
  return (
    <main>
      <BackButton to="/rutas" />
      <h1 className="text-white font-bold text-[40px] my-2">Nueva Ruta</h1>
      <FormNewRoad />
    </main>
  );
};

export default NewRoadPage;
