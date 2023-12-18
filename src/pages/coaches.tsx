import CardsCoaches from "../components/containers/cards-coaches";
import Button from "../components/ui/button";
import { Link } from "react-router-dom";
const CoachesPage = () => {
  return (
    <main>
      <div className="flex justify-between w-full items-center">
        <h1 className="text-white font-bold text-[40px] my-2">Entrenadores</h1>
        <Link to="/nuevo-entrenador">
          <Button>Nuevo entrenador</Button>
        </Link>
      </div>
      <CardsCoaches />
    </main>
  );
};

export default CoachesPage;
